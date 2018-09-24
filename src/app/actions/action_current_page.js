
export const switchToPage = (page) => dispatch => {
    console.log('page', page);
    return  dispatch({
        type: page
    })
} 
