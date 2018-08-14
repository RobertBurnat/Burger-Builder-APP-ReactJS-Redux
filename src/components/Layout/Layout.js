import React from 'react';

import Aux from '../../Auxiliary/Auxiliary';

const layout = props => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdroup</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;