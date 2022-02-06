import {useEffect, useState} from "react";

function DdayTimer() {
    const [lastDays, setLastDays] = useState("?");
    const [lastSecond, setLastSecond] = useState("?");
    const [lastHour, setLastHour] = useState("?");
    const [lastMinute, setLastMinute] = useState("?");

    const DDAY = new Date("2022-04-21:00:00:00+0900");

    const getLastTime = () => {
        const gap = DDAY - Date.now();
        setLastDays(
            Math.floor(gap / (1000 * 60 * 60 * 24))
        )
        setLastHour(
            Math.floor((gap / (1000 * 60 * 60)) % 24)
        )
        setLastMinute(
            Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))
        )
        setLastSecond(
            Math.floor(gap / 1000 % 60)
        )
    }

    useEffect(() => {
        getLastTime()
        setInterval(getLastTime, 1000)
    }, [])


    return (
        <div>
            <header>남은시간: {lastDays}일{lastHour}시간{lastMinute}분{lastSecond}초</header>
        </div>
    );
}

export default DdayTimer;
