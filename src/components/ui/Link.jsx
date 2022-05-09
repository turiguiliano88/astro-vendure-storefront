// import { state } from "../../store";

// export default function Link(props) {
//   const _href = state.authToken
//     ? `${props.href}?auth_token=${state.authToken}`
//     : props.href;
//   return <a href={_href}>{props.children}</a>;
// }

export default function Link(props) {
  // console.log("auth_token", localStorage.auth_token);
  // const href = localStorage.auth_token
  //   ? `${props.href}?auth_token=${localStorage.auth_token}`
  //   : props.href;
  return <a href={props.href}>{props.children}</a>;
}
