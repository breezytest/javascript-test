## React interview questions

1. What is state and props in reactjs?
    state
        -components dynamic data
        -determines the behaviour of component
    props
        -a passed data from component to component or from central state to component
 
2. What is higt order component? How do you use it?
    Higher order component
        -functions that takes and returns a component
    how do you use it
        const requireAuth = (WrappedComponent) => {
            return (props) => (
                <div>
                    {props.isAuth ? (
                        <WrappedComponent {...props}/>
                    ) : ( 
                        <p>Please login to view info</p>
                    )}
                </div>
            );
        }

3. What is context? What are the benefits of it?
    context
        -a way to pass data through component tree without passing props down to every level in an application.
    What are the benefits of it
        -an alternative to redux if you dont know redux
        -great for simple shared state like theme and alerts

4. How to assign and change the value of state in a component?
    -you could use setState()
        this.state = {
            isLoggedIn:false;
        }
        this.setState({isLoggedIn:true});
    -or useState for react hooks
        const [isLoggedIn, setIsLoggedIn] = useState(false);
        setIsLoggedIn(true);

5. Could you explain the life-cycle of a react component?
    -components lifecycle can be described as set events
    Mounting – When component was initially rendered
    Update –  when component changes
    Unmount – when component is removed from screen

6. What is fragment in react?
    -allows us to wrap a list of elements without adding extra element
        this
            return(
                <div>
                    <p>e</p>
                </div>
            )
        can be replaced of 
            return(
                <React.Fragment>
                    <p>e</p>
                </React.Fragment>
            )

7. What is ref in react?
    -refs are used to get reference to a DOM elementor an instance of a component

8. What is container component? What is presentational component?
    container component
        -container components are more concerned with how things work
        -They may contain presentational components. Presentational components don’t contain container components.
        -Because they are mostly data sources, they are often stateful.
        -Best describe as class based component
    presentational component
        -Presentational components are primarily concerned with how things look.
        -Presentational components do not know how to load or alter the data that they render
        -best describes as stateless functional component
    

9. How to pass a function to a component?
    -parent component
        const foo = () => { /*some contents*/}
        <ChildComponent foo={this.foo}>
    -child component
        this.props.foo();

10. What is portal?
    -Provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
