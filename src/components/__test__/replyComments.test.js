import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CommentLists from '../CommentLists';
import userEvent from '@testing-library/user-event';

const data = [{
 'created': 1641951478221,
 'id': "01a42972-c61c-4516-812c-15d66f6f2123",
 'parentId': null,
 'text': "post"
}]

const replies = [{
 'created': 1641951478221,
 'id': "01a42972-c61c-4516-812c-15d66f6f2123",
 'parentId': "01a42972-c61c-4516-812c-15d66f6f2123",
 'text': "post"
}]

describe("Compoenet", () => {
 it('rendersCommentListComponent', () => {
  render(<CommentLists comment={data} />)
 });
})

it("FindReplyButtonandClick", async () => {
 render(<CommentLists comment={data} replyComments={replies} />);

 const replyButton = screen.getByTestId(`click_reply${data[0].id}`)
 fireEvent.click(replyButton)
});

it("FindReplyInputandType", async () => {
 render(<CommentLists comment={data} replyComments={replies} />);

 const replyButton = screen.getByTestId(`click_reply${data[0].id}`)
 fireEvent.click(replyButton)

 const replyInput = screen.getByTestId(`reply_input${data[0].id}`)
 userEvent.type(replyInput, "Reply 1");
});

it("FindReplyPostButton", async () => {
 render(<CommentLists comment={data} replyComments={replies} addReply={() => { }} />);

 const replyButton = screen.getByTestId(`click_reply${data[0].id}`)
 fireEvent.click(replyButton)

 const replyInput = screen.getByTestId(`reply_input${data[0].id}`)
 userEvent.type(replyInput, "Reply 1");

 const replyPostButton = screen.getByTestId(`save_reply${data[0].id}`)
 fireEvent.click(replyPostButton)
});