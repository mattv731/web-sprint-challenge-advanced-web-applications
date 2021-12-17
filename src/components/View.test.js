import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';
import mockAxiosWithAuth from '../utils/axiosWithAuth';
jest.mock('../utils/axiosWithAuth')

const article = [{
    id: 'sdfgsdfg',
    headline: "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
    createdOn: '04/2/21',
    author:"test to make sure author shows up",
    image: 134,
    summary: "Triple-digit temperatures led to a spike in demand across the region.",
    body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
},
{
    id: 'yyyyyyyyy',
    headline: "Less than half of oregon homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
    createdOn: '04/2/21',
    author:"test to make sure author shows up",
    image: 134,
    summary: "Triple-digit temperatures led to a spike in demand across the region.",
    body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
},
{
    id: 'tttttttt',
    headline: "Less than half of utah homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
    createdOn: '04/2/21',
    author:"test to make sure author shows up",
    image: 134,
    summary: "Triple-digit temperatures led to a spike in demand across the region.",
    body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
}]

const empty = {id: '',
headline: '',
createdOn: '',
author: '',
image: '',
summary: '',
body: '',
}

test("renders zero articles without errors", async () => {
    render(<View />)
    const headline = screen.queryByText(/Less than/i)

    expect(headline).not.toBeInTheDocument();
});

test("renders three articles without errors", async ()=> {
    // render(<View />)
})

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.