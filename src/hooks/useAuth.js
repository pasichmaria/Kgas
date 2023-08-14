import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { login, sendFeedback } from '../API'
export const useAuth = ({ onLoginSuccess }) => {
  const navigate = useNavigate()
  const loginQuery = useMutation({
    mutationFn: (data) => login(data),
    onSuccess: async (data) => {
      onLoginSuccess(data)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      navigate('/acts')
    },
    staleTime: Infinity,
    onError: async (error) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  })
  return {
    login: loginQuery.mutate
  }
}

export const useFeedback = ({onFeedbackSuccess }) => {
  const navigate = useNavigate()
  const feedbackQuery = useMutation({
    mutationFn: (data) => sendFeedback(data),
    onSuccess: async (data) => {
      onFeedbackSuccess(data)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      navigate('/home')
    },
    staleTime: Infinity,
    onError: async (error) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  })
  return {
    feedback: feedbackQuery.mutate
  }
}
