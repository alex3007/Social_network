import React, {useState} from 'react';
import cls from "./Paginator.module.css";
import cn from "classnames";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={cn(cls.paginator)}>
        <div className={cls.paginatorArea}>
            <div className={cls.pageNumbers}>
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                        return <span className={cn({
                            [cls.selectedPage]: currentPage === p
                        }, cls.pageNumber)}
                                     key={p}
                                     onClick={(e) => {
                                         onPageChanged(p);
                                     }}>{p}</span>
                    })}
            </div>
            <div className={cls.buttons}>

                {portionCount > portionNumber &&
                <button className={cls.pageBtn} onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>}

                {portionNumber > 1 &&
                <button className={cls.pageBtn} onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREV</button>}

            </div>
        </div>
    </div>
}

export default Paginator;