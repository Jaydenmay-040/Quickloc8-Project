<template>
    <div id="message">
        <div class="messages">
            <ul>
                <li v-for="message in message" :key="message.mesage">
                    <img src="../assets/E.png" alt="">
                    <div class="group">
                        <div class="title"><h1>{{message.subject}}</h1></div>
                        <div class="text"><p>{{message.message}}</p></div>
                    </div>
                    <div class="date"><p class="date">{{message.display}}</p></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import messagesData from './messages.json';
    export default {
        data() {
            return {
                message: messagesData
            }
        }
    }
</script>

<style>
    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    #message{
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .messages {
        width: 90%;
        height: 90vh;
        background-color: white !important;
        display: flex;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    #message li {
        display: flex;
        width: 92%;
        height: 10vh;
        border-bottom: 0.1px solid #767A7E;
    }
    .group {
        width: 87%;
    }
    .title{
        display: flex;
        font-size: 10px;
        width: 92vw;
        margin-left: 5px;
        margin-top: 8px;
    }
    .text{
        width: 92vw;
        height: 80%;
        display: flex;
        justify-content: flex-start;
        margin-left: 5px;
        margin-top: 7px;
        font-size: 15px;
        color: #767A7E;
    }
    .date{
        display: flex;
        text-align: center;
        margin-top: 10px;
    }
</style>