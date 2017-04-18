'use strict';

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link, browserHistory} from 'react-router';
import Animation from 'react-addons-css-transition-group';
import {UserActions, AccessControl as createAccessControl} from '../../../library/authentication';
import {PaginationControls} from '../../../library/pagination';
import roleConfig from '../../../../roleConfig';
const AccessControl = createAccessControl(roleConfig);

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({

	}, dispatch);
}

class StorePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
		}

    }

    componentDidMount() {
        document.title = "Tree Machine Records | Store";
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="row">
					<div className="small-12 columns">
						<h1>Store: Under Construction</h1>
					</div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StorePage);
