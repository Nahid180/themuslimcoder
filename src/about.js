import Cookie from 'js-cookie'

function About() {
  const setCookie = (cookiename, usrin) => {
    Cookie.set(cookiename, usrin, {
      expires: 365,
      secure: true,
      sameSite: 'strict'
    })

  }
  return (
    <button onClick={setCookie("email","nahid180")}>Save Cookie</button>
  )

}

export default About;