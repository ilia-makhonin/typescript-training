function swap(arr: number[], indexOne: number, indexTwo: number): void
{
    let temp: number = arr[indexOne];
    arr[indexOne] = arr [indexTwo];
    arr[indexTwo] = temp;
}


// *******************************************************************************************
function selectinSort(arrOfNumber: number[]): void 
{
    for (let i: number = 0; i < arrOfNumber.length; i++)
    {
        let minElem: number = i;

        for (let j: number = i + 1; j < arrOfNumber.length; j++)
        {
            if (arrOfNumber[minElem] > arrOfNumber[j])
            {
                minElem = j;
            }
        }

        swap(arrOfNumber, i, minElem);
    }
}


// *******************************************************************************************
function serachIndexToInsert(arr: number[], value: number): number
{
    for (let i: number = 0; i < arr.length; i++)
    {
        if (arr[i] > value)
        {
            return i;
        }
    }

    return arr.length - 1;
}


function insertion(arr: number[], indexTo: number, indexFrom: number)
{
    let temp:number = arr[indexFrom];

    for (let i: number = indexFrom; i > indexTo; i--)
    {
        arr[i] = arr[i - 1];
    }

    arr[indexTo] = temp;
}


function insertionSort(arrayOfNumber: number[]): void
{
    for (let i = 1; i < arrayOfNumber.length; i++)
    {
        if (arrayOfNumber[i - 1] > arrayOfNumber[i])
        {
            let index: number = serachIndexToInsert(arrayOfNumber, arrayOfNumber[i]);
            insertion(arrayOfNumber, index, i);
        }
    }
}


// *******************************************************************************************
function merge(left: number[], right: number[]): Array<number>
{
    let result: number[] = [];

    while (left.length && right.length)
    {
        if (left[0] <= right[0])
        {
            result.push(left[0]);
            left = left.slice(1);
        }
        else
        {
            result.push(right[0]);
            right = right.slice(1);
        }
    }
    
    if (left.length)
    {
        result = result.concat(left);
    }

    if (right.length)
    {
        result = result.concat(right);
    }

    return result;
}


function mergeSort(arrayOfNumber: number[]): Array<number>
{
    if (arrayOfNumber.length <= 1)
    {
        return arrayOfNumber;
    }

    let middle: number = arrayOfNumber.length / 2;
    let arrayLeft: number[] = mergeSort(arrayOfNumber.slice(0, middle));
    let arrayRight: number[] = mergeSort(arrayOfNumber.slice(middle));

    return merge(arrayLeft, arrayRight);
}


// *******************************************************************************************
function bubbleSort(arrayOfNumber: number[]): void
{
    const length: number = arrayOfNumber.length;
    let swapped: boolean;

    for (let i: number = 0; i < length; i++)
    {
        swapped = false;

        for (let j: number = 0; j < length - (i - 1); j++)
        {
            if (arrayOfNumber[j] > arrayOfNumber[j + 1])
            {
                swapped = true;
                swap(arrayOfNumber, j, j + 1);
            }
        }

        if (!swapped)
        {
            break;
        }
    }
}


function bubbleSortClassic(arrayOfNumber: number[]): void
{
    const length: number = arrayOfNumber.length;

    for (let i: number = 0; i < length; i++)
    {
        for (let j: number = 0; j < length - (i - 1); j++)
        {
            if (arrayOfNumber[j] > arrayOfNumber[j + 1])
            {
                swap(arrayOfNumber, j, j + 1);
            }
        }
    }
}


function bubbleSortWithWhile(arrayOfNumber: number[]): void
{
    const length: number = arrayOfNumber.length;
    let swapped: boolean = true;
    let count: number = 0;

    while(swapped)
    {
        swapped = false;

        for (let j: number = 0; j < length - (count - 1); j++)
        {
            if (arrayOfNumber[j] > arrayOfNumber[j + 1])
            {
                swapped = true;
                swap(arrayOfNumber, j, j + 1);
            }
        }

        count++;
    }
}


export {
    bubbleSort, 
    bubbleSortClassic, 
    bubbleSortWithWhile, 
    selectinSort, 
    insertionSort, 
    mergeSort
};
