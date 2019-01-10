import React from "react";
import "./form.css";

const Form = props => (
    <div className="row">
        <div className="col-md-12">
            <h1 className="text-center">Weather Finder</h1>
            <p className="text-center">Find out temperature, conditions, and more...</p>
        </div>
        <div className="row">
            <form onSubmit={props.getWeather}>
                <div className="form-row">
                    <div className="col-5 ml-4">
                        <input type="text" className="form-control" name="city" placeholder="City..." />
                    </div>
                    <div className="col-5">
                        <input type="text" className="form-control" name="country" placeholder="Country..." />
                    </div>
                    <div className="form-row">
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary mt-2">Get Weather</button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    </div>
);

export default Form;