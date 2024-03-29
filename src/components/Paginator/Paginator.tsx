import React, {useState} from 'react'
import styles from ".././Paginator/Paginator.module.css";

type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
    portionSize : number
}

export let Paginator = (props: PaginatorPropsType) => {

    let {onPageChanged, pageSize, currentPage, totalItemsCount, portionSize} = props

    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div className={styles.paginator}>
        {portionNumber > 1 &&
          <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>
        }
        {pages
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)

          .map(p => {
            return <span className={ currentPage === p ? styles.selectedPage : ''}
                         key={p}
                         onClick={() => {
                             onPageChanged(p)
                         }}>{p} </span>
        })}
        {portionCount > portionNumber &&
        <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>
        }

    </div>
}