# Tip Tuesday - React Memo

React.memo() is a higher order component that takes a component as an argument and returns a new component. The new component will only re-render if the props have changed otherwise is will reuse the previously rendered state.

![image](https://user-images.githubusercontent.com/91791834/182842514-8cc74310-bc34-47e2-aa22-c21ee3a88c2d.png)

## Example

![image](https://user-images.githubusercontent.com/91791834/182844161-15b6c493-0992-44b0-8815-ec798a05361b.png)

[Memo Unused.webm](https://user-images.githubusercontent.com/91791834/182853403-7f43ad47-7a9f-4ba2-a682-959b2e92bcc7.webm)

- In this example when a user types the todo in the input field, the Todo component also gets re-rendered 

- this is a simple case and it might not be a problem but when a complex component is re-rendered, there is a significant preformance drop

To avoid this problem Memo was introduced, when a component is wraped with ```memo(Component)``` React Memoizes the previous props and compares them with the current props, When same It doesnt Re-Render otherwise the component is Re-Rendered

[Memo Used.webm](https://user-images.githubusercontent.com/91791834/182853375-8b2e4e9d-3e8a-4e6c-8df0-9a3c524a0ee1.webm)

## Aditional Tip:

- If an object or a function is passed as props to the component React Memo Stops Working since when they are compared only refrences are checked
- To overcome this we can pass a custom function to memo called ```areEqual: (prevProps, nextProps) => boolean``` which returns true if the props are the same

![image](https://user-images.githubusercontent.com/91791834/182851321-bf75300c-2fcc-4f24-ad73-142c08788f75.png)
