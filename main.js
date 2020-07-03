function Greeting(props) {
    return (<div><h1>{props.text}, children: {props.children}</h1></div>);
}

ReactDOM.render(<div>
    <Greeting text='Hi there'/><Greeting/>
    <Greeting text='Aloha!'/>Bro<Greeting/>
</div>, document.getElementById('root'));