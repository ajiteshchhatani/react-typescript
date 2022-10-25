import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';

const components: string[] = ["counter", "todolist"];

export default function Index() {
    return (
        <div className='index-container'>
            <div className='sidebar'>
                <Link to={`/`}>HOME</Link>
                {
                    components.map((c) => (
                        <Link key={c} to={`/${c}`}>{c.toUpperCase()}</Link>
                    ))
                }
            </div>
            <div className='content-detail'>
                <Outlet></Outlet>
            </div>
        </div>
    )
}