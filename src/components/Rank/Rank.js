import React from 'react';

const Rank = ({ name, entries }) => {
    return(
        <div className='pa3'>
            <div className='white f3'>
                {`${name}, based on your entry count, your minion ranking is...`}
            </div>
            <div className='white f1'>
                {entries}
            </div>
        </div>
    );
}

export default Rank;
