import React from 'react';
import {
  render,
  cleanup,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import nock from 'nock';
import { Dashboard } from '../Dashboard';
import {
  FAKE_LOGIN_PRESENT_IN_GITHUB,
  FAKE_LOGIN_ABSENT_IN_GITHUB,
  FAKE_ERROR_MESSAGE,
  LOGIN_LIST
} from './fixtures/github';

describe('view GitHub logins', () => {
  beforeEach(() => {
    nock('https://api.github.com')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true'
      })
      .persist()
      .get(`/search/users?q=${FAKE_LOGIN_PRESENT_IN_GITHUB}`)
      .reply(200, { items: LOGIN_LIST })
      .get(`/search/users?q=${FAKE_LOGIN_ABSENT_IN_GITHUB}`)
      .reply(200, { items: [] })
      .get(`/search/users?q=${FAKE_ERROR_MESSAGE}`)
      .replyWithError({
        error: {
          message: FAKE_ERROR_MESSAGE,
          code: 'AWFUL_ERROR',
        }
      })

    jest.useFakeTimers()
  })


  afterEach(function () {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
    cleanup()
    nock.cleanAll();
  })



  describe('when user Github Login is Present', () => {
    it('user can view the list of Logins based on search', async () => {
      const wrapper = render(<Dashboard />);
      const { getByText, getByPlaceholderText, queryByText } = wrapper

      //type login in the input field
      userEvent.type(getByPlaceholderText(/Search user/i), FAKE_LOGIN_PRESENT_IN_GITHUB);
      expect(getByPlaceholderText(/Search user/i)).toHaveAttribute('value', FAKE_LOGIN_PRESENT_IN_GITHUB);


      //add loading state as api is called after delay
      await waitFor(() => getByText(/Loading .../i));
      expect(queryByText(FAKE_ERROR_MESSAGE)).toBeNull();

      //wait until loading state is finished
      await waitForElementToBeRemoved(() => getByText(/Loading .../i))

      //wait until the table with header of name is rendered
      await waitFor(() => getByText(/Name/i))
      const tableElem = getByText(/Name/i);
      expect(queryByText(/secondTestLogin/i)).toBeInTheDocument();
      expect(tableElem).toBeInTheDocument();

      //confirm theere is no error in the document and loading is done
      expect(queryByText(FAKE_ERROR_MESSAGE)).toBeNull();
      expect(queryByText(/Loading .../i)).toBeNull();
    });
  });


  describe('when user Github Login is not present', () => {
    it('user is presented with a message that there user is not found', async () => {
      const { getByText, getByPlaceholderText, queryByText } = render(<Dashboard />);

      //type login in the input field
      userEvent.type(getByPlaceholderText(/Search user/i), FAKE_LOGIN_ABSENT_IN_GITHUB);
      expect(getByPlaceholderText(/Search user/i)).toHaveAttribute('value', FAKE_LOGIN_ABSENT_IN_GITHUB);

      //add loading state as api is called after delay
      await waitFor(() => getByText(/Loading .../i));
      expect(queryByText(FAKE_ERROR_MESSAGE)).toBeNull();

      //wait until loading state is finished
      await waitForElementToBeRemoved(() => getByText(/Loading .../i))

      //wait until the the empty user message is found
      await waitFor(() => getByText(/User not found/i))
      const empty = getByText(/User not found/i);
      expect(empty).toBeInTheDocument();

      //confirm theere is no error in the document and loading is done
      expect(queryByText(FAKE_ERROR_MESSAGE)).toBeNull();
      expect(queryByText(/Loading .../i)).toBeNull();
    })
  })


  describe('when there is an error', () => {
    it('user is presented with a message when there is an error', async () => {


      const wrapper2 = render(<Dashboard />);
      const { getByText, getByPlaceholderText, queryByText } = wrapper2
      //type login in the input field
      userEvent.type(getByPlaceholderText(/Search user/i), FAKE_ERROR_MESSAGE);
      expect(getByPlaceholderText(/Search user/i)).toHaveAttribute('value', FAKE_ERROR_MESSAGE);


      //add loading state as api is called after delay
      await waitFor(() => getByText(/Loading .../i));

      //wait until loading state is finished
      await waitForElementToBeRemoved(() => getByText(/Loading .../i))

      //wait until the the error

      await waitFor(() => getByText(/TRY AGAIN/i))
      const error = getByText(/TRY AGAIN/i);
      expect(error).toBeInTheDocument();

      //confirm theere is no error in the document and loading is done
      expect(queryByText(/Loading .../i)).toBeNull();
    })
  })
})
