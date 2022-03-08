import React, { useEffect, useState } from 'react';

export const Counter = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('Tolya');

    useEffect(() => {
        console.log('counter did mount')
    }, []);
    useEffect(() => {
        console.log('counter did mount + update mount')
    });
    useEffect(() => {
        console.log('counter did mount or name changed')
    }, [name]);
    useEffect(() => {
        console.log('counter did mount or any changed')
    }, [name, count]);
    useEffect(() => {
        return () => {
            console.log('counter will unmount');
        }
    },[])

    const updateCount = () => {
        console.log('before: ', count);
        setCount((prevCount) => prevCount + 1)
        console.log('after: ', count);
    }

    return (
        <div>
            <h3>{count}</h3>
            <h4>{name}</h4>
            <button onClick={updateCount}>Click</button>
        </div>
    )
}

/* export class Button extends React.Component {
    constructor(props) {
        super(props);
        console.log('button constructor');
        this.state = {
            timer: 0
        }
    }

    componentDidMount() {
        console.log('button did Mount');
        this.interval = setInterval(() => {
            this.setState((prevState) => ({timer: prevState.timer + 1}))
        }
        ,1000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('button did Update');
    }

    componentWillUnmount() {
        console.log('button will Unmount');
        clearInterval(this.interval);
    }

    render() {
        return <button onClick={this.props.onClick}>{this.props.title} {this.state.timer}</button>
    }
}

export class Counter extends React.Component {

    constructor(props) {
        console.log('Counter constructor');
        super(props);

        this.state = {
            count: 0,
            showButton: true,
        }
    }

    updateCount = () => {
        console.log('before: ', this.state.count);
        this.setState((prevState) => ({ count: prevState.count += 1 }), () => {
            console.log('after: ', this.state.count);
        });
    }

    toggleButton = () => {
        this.setState(prevState => ({showButton: !prevState.showButton}))
    }

    componentDidMount() {
        console.log('Counter did Mount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Counter did Update');
    }

    componentWillUnmount() {
        console.log('Counter will Unmount');
    }

    render() {
        console.log('Counter render');
        return (
            <div>
                <h3>{this.state.count}</h3>
                <button onClick={this.toggleButton}>Toggle</button>
                {this.state.showButton && <Button onClick={this.updateCount} title="click" />}
            </div>
        )
    }
} */