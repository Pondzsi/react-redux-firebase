const initState = {
    projects: [
        {id: '1', title: 'help me with 1', content:'blah blah blah'},
        {id: '2', title: 'help me with 2', content:'blah blah blah'},
        {id: '3', title: 'help me with 3', content:'blah blah blah'},
    ]
};

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log(action.project);
            break;
        default:
            break;
    }
    return state;
}

export default projectReducer;