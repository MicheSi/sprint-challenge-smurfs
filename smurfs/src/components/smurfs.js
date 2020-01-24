import React from 'react';
import {connect} from 'react-redux';
import { Spinner } from 'reactstrap';

import {fetchSmurf} from '../actions';

const Smurf = props => {
    return (
        <div className='smurf'>
            {/* code for fetch start */}
            {props.isLoading && (
                <div className='spinner'>

                    <Spinner type="grow" color="primary" />
                    <Spinner type="grow" color="secondary" />
                    <Spinner type="grow" color="success" />
                    <Spinner type="grow" color="danger" />
                    <Spinner type="grow" color="warning" />
                    <Spinner type="grow" color="info" />
                    <Spinner type="grow" color="light" />
                    <Spinner type="grow" color="dark" />
            </div>
            )}
            <button onClick={props.fetchSmurf}>Get Smurfs</button>
            {/* code for fetch success */}
            {props.name && !props.isLoading && (
                <div className='smurf'>
                    <h2>{props.name.name}</h2>
                    <p>Age: {props.age.age}</p>
                    <p>Height: {props.height.height}</p>
                </div>
            )}
            {props.smurfs.map(smurf => {
                return (
                    <div className='smurf' key={smurf.id}>
                    <h2>{smurf.name}</h2>
                    <p>Age: {smurf.age}</p>
                    <p>Height: {smurf.height}</p>
                    </div>
                )
            }
            )}

        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        smurfs: state.smurfs
        // name: state.name,
        // age: state.age,
        // height: state.height,
        // id: state.id
    }
}

export default connect(mapStateToProps, {fetchSmurf})(Smurf)