import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://izfbtdpamcaxpiqmwdro.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6ZmJ0ZHBhbWNheHBpcW13ZHJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwOTc4MjAsImV4cCI6MjA0MjY3MzgyMH0.qUuniurlHXuDsS2WlDX1Z2Qww1apUk8hBo7E2zeCFwU",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6ZmJ0ZHBhbWNheHBpcW13ZHJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwOTc4MjAsImV4cCI6MjA0MjY3MzgyMH0.qUuniurlHXuDsS2WlDX1Z2Qww1apUk8hBo7E2zeCFwU"
    }
})