function Greeting() {
    return (<h1>Hello react!!!</h1>);
}

ReactDOM.render(<div>
    <Greeting/><Greeting/>
</div>, document.getElementById('root'));