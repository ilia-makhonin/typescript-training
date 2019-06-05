function linearSearch(array: number[], searchElement: number): number|string
{
    for (let i: number = 0; i < array.length; i++)
    {
        if (array[i] === searchElement)
        {
            return i;
        }
    }

    return "Element not found!";
}


function linearSearchRecursive(
    array: number[], searchElement: number, startIndex: number = 0
): number|string
{
    if (array[startIndex] === searchElement)
    {
        return startIndex;
    }
    else if (startIndex >= array.length)
    {
        return "Element not found!";
    }
    else
    {
        return linearSearchRecursive(array, searchElement, startIndex + 1);
    }
}


function binarySearch(array: number[], searchElement: number): number|string
{
    let searchIndex = Math.round(array.length / 2);

    if (array[searchIndex] === searchElement)
    {
        return searchIndex;
    }
    else if (array[searchIndex] > searchElement)
    {
        
    }
}


export {
    linearSearch,
    linearSearchRecursive
};
