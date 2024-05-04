<script
  setup
  lang='ts'
>

</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <NuxtLink
        to="/"
        class="nav-link active"
      >閩南語詞典</NuxtLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink
              to="/hunlui"
              class="nav-link active"
            >分類索引</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              to=""
              class="nav-link active"
            >分類索引</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped></style>