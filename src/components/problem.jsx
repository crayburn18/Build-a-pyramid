import React from 'react';

const Problem = () => {
    return (  
        <form>
                The pharaoh of Egypt had ordered a new Pyramid to be built in the Capital, near the Nile
            river. The Pyramid would consist only of stone blocks. The mining site where the blocks are
            produced is 10 miles down the river. The only way to get to the mining site is by using boats on
            the river. Only <span><input type='number' placeholder='2'></input></span> boats can be in the river, regardless of the direction they travel. The distance
            in time between the mining site and the Pyramid building location in the capital is <span><input type='number' placeholder='10'></input></span> min. Each
            boat can carry up to <span><input type='number' placeholder='6'></input></span> blocks. It takes <span><input type='number' placeholder='1'></input></span> min to load a single block on a boat and it takes <span><input type='number' placeholder='2'></input></span> min
            to unload a block. All <span><input type='number' placeholder='2'></input></span> boats are initially located at the capital site by the river.
        </form>
    );
}
 
export default Problem;