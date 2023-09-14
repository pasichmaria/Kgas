import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { addAct, addActAdditional, addActPLG, getActByNumber, getAllActs, getLabAct } from '../API/actAPI'
import { useEffect, useState } from 'react'

export const useGetAct = ({ id }) => {
  const getActByNumberQuery = useQuery(['act', id], () =>
    getActByNumber({ id }
    ), { enabled: !!id, staleTime: 5000 }
  )
  console.log(getActByNumberQuery)
  return getActByNumberQuery
}
export const useGetActs = () => {
  const [searchValue, setSearchValue] = useState()
  const [perPage, setPerPage] = useState(15)
  const [currentPage, setCurrentPage] = useState(1)

  const query = useQuery(['acts', perPage, currentPage, searchValue], () =>
    getAllActs({
      per_page: perPage,
      current_page: currentPage,
      search_value: searchValue,
    }))
  useEffect(() => {
    query.refetch().then()
  }, [searchValue, currentPage, perPage ])
  return {
    query,
    perPage,
    setPerPage,
    searchValue,
    setSearchValue,
    currentPage,
    setCurrentPage,
  }
}


export const useAddAct = ({ onAddActSuccess , onAddActError }) => {
  const navigate = useNavigate()
  const addActMutation = useMutation({
    mutationFn : (data ) => addAct( data ),
    onSuccess: async (data) => {
      onAddActSuccess(data)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      navigate('/acts')
    },
    staleTime: Infinity,
    onError : async (error) => {
      onAddActError(error)
      await new Promise((resolve) => setTimeout(resolve, 1500))
    }
  })
  return  {
    addAct : addActMutation.mutate ,
    isError : addActMutation.isError,
    isSuccess : addActMutation.isSuccess }
}

export const useAddAdditional = ({ onSuccess , onError }) =>
{
  const addAdditionalMutation = useMutation({
    mutationFn : (data ) => addActAdditional( data ),
    onSuccess : async (data) => {
      onSuccess(data)
      await new Promise((resolve) => setTimeout(resolve, 1500))
    },
    onError : async (error) => {
      onError(error)
      await new Promise((resolve) => setTimeout(resolve, 1500))
    }
  })
  return {
    addAdditional : addAdditionalMutation.mutate ,
    isError : addAdditionalMutation.isError ,
    isSuccess : addAdditionalMutation.isSuccess ,
   }
}

export const useAddPLG = ({ onSuccess , onError}) =>
{
  const addPLGMutation = useMutation({
    mutationFn : (data) => addActPLG(data),
    onSuccess : async (data) => {
      onSuccess(data)
    },
    onError : async (error) => {
      onError(error)
    }
  })
  return {
    addPLG : addPLGMutation.mutate ,
    isError : addPLGMutation.isError ,
    isSuccess : addPLGMutation.isSuccess
  }
}

export  const useGetPLGAct = ({ id }) => {
  const getPLGActQuery = useQuery(['labAct', id], () =>
    getLabAct({ id }
    ), { enabled: !!id, staleTime: 5000 }
  )
  console.log(getPLGActQuery)
  return {
    query: getPLGActQuery ,
    isLoading : getPLGActQuery.isLoading,
    isError : getPLGActQuery.isError,
    isSuccess : getPLGActQuery.isSuccess
  }
}