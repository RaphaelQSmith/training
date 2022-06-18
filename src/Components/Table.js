import React from 'react';
import './style.css';

export default function Table(){
    return <>
    <table className='table'>
        <thead>
            <tr>
                <td></td>
                <td>Jan</td>
                <td>Fev</td>
                <td>Mar</td>
                <td>Apr</td>
                <td>May</td>
                <td>Jun</td>
                <td>Jul</td>
                <td>Ago</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td>15</td>
                <td>80</td>
                <td>7</td>
                <td>150</td>
                <td>66</td>
                <td>40</td>
                <td>33</td>
                <td>5</td>
            </tr>
            

        </tbody>
    </table>
    </>
}