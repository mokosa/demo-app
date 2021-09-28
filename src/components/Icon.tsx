import * as React from 'react';
import { FunctionComponent } from 'react';

import { FaEdit } from 'react-icons/fa';

const icons = {
    edit: <FaEdit></FaEdit>
}

interface IconProps {
    
}
 
const Icon: FunctionComponent<IconProps> = () => {
    return icons['edit'];
}
 
export default Icon;