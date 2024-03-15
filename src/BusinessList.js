import React from 'react';
import Business from './Business';

function BusinessList(props){
    const list = props.list;

    return (
        <div className='BizDiv'>
            {list.map((business) => (
                <Business biz={business} />
            ))
            }
        </div>
    )
}

export default BusinessList;