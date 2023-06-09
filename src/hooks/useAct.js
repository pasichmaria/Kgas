import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { getActByNumber, getAllActs } from '../API/actAPI'
import { useState } from 'react'

export const useAddAct = ({ onAddActSuccess }) => {
  const navigate = useNavigate()
  const addActQuery = useMutation({
    mutationFn: (data) => axios.post('https://jsonplaceholder.typicode.com/posts', data), onSuccess: (data) => {
      onAddActSuccess(data)
      navigate('/acts')
    },
    staleTime: Infinity,
    onError: (error) => {
      console.log(error)
    }
  })
  return {
    addAct: addActQuery.mutate
  }
}
export const useGetAct = ({ act_number }) => {
  const getActByNumberQuery = useQuery(['act', act_number], () =>
    getActByNumber({ act_number }
    ), { enabled: !!act_number }
  )
  return getActByNumberQuery
}
export const useGetActs = () => {
  const [searchValue, setSearchValue] = useState()
  const [perPage, setPerPage] = useState(15)
  const [currentPage, setCurrentPage] = useState(1)

  const getAllActsQuery = useQuery(['acts', perPage, currentPage, searchValue], () =>
    getAllActs({ per_page: perPage, current_page: currentPage, search_value: searchValue }))
  return { query: getAllActsQuery, perPage, setPerPage, searchValue, setSearchValue, currentPage, setCurrentPage }
}
