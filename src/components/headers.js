import React from "react"
import { Helmet } from "react-helmet"

export default function Headers() {
    return (
        <Helmet>
            <title>Muaz Ugur's Portfolio</title>
            <meta name="description" content="Muaz Ugur's personal Website | 2024" />
            <meta property="og:title" content="Muaz Ugur's Portfolio" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="http://muazugur.com" />
            <meta property="og:description" content="Muaz Ugur's personal Website | 2024" />
            <meta name="theme-color" content="#FF0000"/>
        </Helmet>
    )
}
