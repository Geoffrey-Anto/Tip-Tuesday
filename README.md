# Tip Tuesday - React Memo

React.memo() is a higher order component that takes a component as an argument and returns a new component. The new component will only re-render if the props have changed otherwise is will reuse the previously rendered state.

![image](https://user-images.githubusercontent.com/91791834/182842514-8cc74310-bc34-47e2-aa22-c21ee3a88c2d.png)

## Example
![image](https://user-images.githubusercontent.com/91791834/182844161-15b6c493-0992-44b0-8815-ec798a05361b.png)

[Screencast from 04-08-22 06:06:17 PM IST.webm](https://user-images.githubusercontent.com/91791834/182848598-ff59b6dd-a0ea-4d10-85ff-979405bc0efe.webm)

- In this example when a user types the todo in the input field, the Todo component also gets re-rendered 
- this is a simple case and it might not be a problem but when a complex component is re-rendered, there is a significant preformance drop

To avoid this problem Memo was introduced, when a component is wraped with ```memo(Component)``` React Memoizes the previous props and compares them with the current props, When same It doesnt Re-Render otherwise the component is Re-Rendered

[Screencast from 04-08-22 06:03:31 PM IST.webm](https://user-images.githubusercontent.com/91791834/182848107-55d33178-2f77-4a8f-8886-96bd314a9365.webm)
