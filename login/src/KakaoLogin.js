import React, { useEffect } from 'react'

const { Kakao } = window

const KakaoLogin = () => {
  const initKakao = () => {
    if (Kakao && !Kakao.isInitialized()) {
      Kakao.init(`${'dc56b6d084d1dfee81139d38127c0d75'}`)
    }
  }

  useEffect(() => {
    initKakao()
  }, [])

  const kakaoLoginHandler = () => {
    Kakao.Auth.authorize({
      redirectUri: `${'http://localhost:3000/auth'}`,
    })
  }

  return (
    <SocialLogin onClick={kakaoLoginHandler}>
      <MessageCircle />
      <span>카카오 로그인</span>
    </SocialLogin>
  )
}

export default KakaoLogin
