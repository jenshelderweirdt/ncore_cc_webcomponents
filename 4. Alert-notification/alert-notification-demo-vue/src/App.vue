<template>
  <div id="app">
    <h1>Vue alert-notification demo</h1>
    <alert-notification id="notification" message="Hello world!" life="3000">
    <span slot="content">Hello world closes after 3 seconds</span>
    </alert-notification>

    <button onclick="notification.show('danger')">Danger Alert!</button>
    <button onclick="notification.show('success')">Success Alert!</button>
  </div>
</template>