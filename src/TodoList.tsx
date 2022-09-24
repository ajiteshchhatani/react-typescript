import * as React from 'react';

export default function TodoList() {
    const [item, setItem] = React.useState('');
    const [list, setList] = React.useState<string[]>([]);
    const [doneList, setDoneList] = React.useState<string[]>([]);

    const handleItemChange = (e: React.FormEvent<HTMLInputElement>) => {
        setItem(e.currentTarget.value)
    }

    const handleItemAdd = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setList((prevArray) => [...prevArray, item])
        setItem('');
    }

    const handleToggleItemStatus = (e: React.MouseEvent) => {
        e.preventDefault();
        //console.log(e.currentTarget.textContent);
        e.currentTarget.classList.toggle('done');
        const classes = Array.from(e.currentTarget.classList);
        //console.log(classes);
        classes.includes('done') ? markTaskAsDone(e.currentTarget.textContent) : markTaskAsTodo(e.currentTarget.textContent)
        //console.log(e.currentTarget.classList)
    }

    const markTaskAsDone = (item: string | null) => {
        if (typeof item === 'string') {
            setDoneList((prevArray) => {
                const newArr = [...prevArray];
                newArr.push(item)
                return newArr
            })
            console.log(doneList);
        }
    }

    const markTaskAsTodo = (item: string | null) => {
        if (typeof item === 'string') {
            //setDoneList((prevArray) => [...prevArray, item])
            setDoneList((prevArray) => {
                const newArr = [...prevArray];
                const index = doneList.indexOf(item);
                newArr.splice(index, 1)
                return newArr
            })
            //setDoneList(doneList)
            //console.log(doneList)
        }
    }


    return (
        <div>
            <input type="text" value={item} onChange={handleItemChange} />
            <button type="button" onClick={handleItemAdd}>Add</button>
            {
                list.length > 0 ? (
                    <ul>
                        {
                            list.map(item => (
                                <li onClick={handleToggleItemStatus} key={item}>{item}</li>
                            ))
                        }
                    </ul>
                ) : null
            }
            <p>{doneList.length} tasks done out of {list.length} </p>
        </div>
    )
}