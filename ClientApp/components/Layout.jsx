/* @flow */

import * as React from 'react';
import { NavMenu } from './NavMenu';

type Props = {
    children?: React.Node,
  };

export class Layout extends React.Component<Props, {}> {
    render() {
        return <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-3'>
                    <NavMenu />
                </div>
                <div className='col-sm-9'>
                    { this.props.children }
                </div>
            </div>
        </div>;
    }
}
