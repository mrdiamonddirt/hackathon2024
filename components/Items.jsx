// net thhe items from garchi and display display the items in the form of cards
import React from 'react';
import garchi from "@/utils/garchi"
import SingleItem from "@/components/SingleItem"

export default async function Items()
{
 const itemsData = await garchi.garchiGetRequest("items")
 return (<ul>
    {itemsData?.data?.map((item) => <SingleItem item={item} />)}
 </ul>)
}

