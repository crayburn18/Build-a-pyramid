import React from 'react';

const Problem = ({ values, change, submit }) => {

    const onChange = (evt) => {
        const { name, value} = evt.target;
        change(name, value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }
    
    let boatLimitInput = <span><input name='boatLimit' value={values.boatLimit} onChange={onChange} onSubmit={onSubmit} type='number' placeholder='2' min='0'></input></span>;
    let travelTimeInput = <span><input name='travelTime' value={values.travelTime} onChange={onChange} onSubmit={onSubmit} type='number' placeholder='10' min='0'></input></span>;
    let boatCapacityInput = <span><input name='boatCapacity' value={values.boatCapacity} onChange={onChange} onSubmit={onSubmit} type='number' placeholder='6' min='0'></input></span>;
    let loadTimeInput = <span><input name='loadTime' value={values.loadTime} onChange={onChange} onSubmit={onSubmit} type='number' placeholder='1' min='0'></input></span>;
    let unloadTimeInput = <span><input name='unloadTime' value={values.unloadTime} onChange={onChange} onSubmit={onSubmit} type='number' placeholder='2' min='0'></input></span>;
    let totalBoatsInput = <span><input name='totalBoats' value={values.totalBoats} onChange={onChange} onSubmit={onSubmit} type='number' placeholder='20' min='0'></input></span>;
    let timeLimitInput = <span><input name='timeLimit' value={values.timeLimit} onChange={onChange} onSubmit={onSubmit} type='number' placeholder='2' min='0'></input></span>;

    return (  
        <form onSubmit={onSubmit} onChange={onChange}>
                The pharaoh of Egypt had ordered a new Pyramid to be built in the Capital, near the Nile
            river. The Pyramid would consist only of stone blocks. The mining site where the blocks are
            produced is 10 miles down the river. The only way to get to the mining site is by using boats on
            the river. Only {boatLimitInput} boats can be in the river, regardless of the direction they travel. The distance
            in time between the mining site and the Pyramid building location in the capital is {travelTimeInput} min. Each boat can carry up to {boatCapacityInput} blocks. It takes {loadTimeInput} min to load a single block on a boat and it takes {unloadTimeInput} min to unload a block. All {totalBoatsInput} boats are initially located at the capital site by the river. How many stones can be unloaded at the camp site in {timeLimitInput} hours?<br/>
            <button className='btn btn-danger'>Calculate</button>
        </form>
    );
}
 
export default Problem;