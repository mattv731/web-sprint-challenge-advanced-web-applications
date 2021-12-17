import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render, screen, waitFor } from '@testing-library/react'; 

const handleDelete = (item) => {
    console.log("deleted")
}

const article = {
    id: 'sdfgsdfg',
    headline: "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
    createdOn: '04/2/21',
    author:"test to make sure author shows up",
    image: 134,
    summary: "Triple-digit temperatures led to a spike in demand across the region.",
    body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
}
const testInfo = {
    id: 'sdfgsdfg',
    headline: "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
    createdOn: '04/2/21',
    author:"",
    image: 134,
    summary: "Triple-digit temperatures led to a spike in demand across the region.",
    body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
}
test('renders component without errors', ()=> {
    render(<Article key={article.id} article={article}/> )
})

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article key={article.id} article={article}/>)
    const headline = screen.queryByText(/Less than half of Seattle homes hav/i)
    const author = screen.queryByText(/test to make sure author shows up/i)

    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article key={testInfo.id} article={testInfo} />)
    const author = screen.queryByText(/Associated Press/i)

    expect(author).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed',  ()=> {
    render(<Article key={article.id} article={article} handleDelete={handleDelete}/>)
    const deleteItem = screen.queryByTestId('deleteButton')

    userEvent.click(deleteItem)

    expect(handleDelete).toBeCalled
});

// Task List:
// 1. Complete all above tests. Create test article data when needed.