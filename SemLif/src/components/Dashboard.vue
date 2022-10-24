<script setup>
import { RouterLink, RouterView } from "vue-router";
import Modal from "./Modal.vue"

</script>

<template>
  <div class="container mx-auto px-20 bg">
    <div class="flex flex-col w-full" style="cursor: auto">
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
        <div
          class="metric-card bg-slate-900 text-white border-gray-900 rounded-lg p-4 max-w-72 w-full"
          style="cursor: auto"
        >
          <a
            aria-label="Unsplash Downloads"
            target="_blank"
            rel="noopener noreferrer"
            href="https://stackdiary.com/"
          >
            <div
              class="flex items-center justify-between mb-4"
              style="cursor: auto"
            >
              Filmes Cadastrados 
              <svg
                class="h-4 w-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style="cursor: auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
            </div>
          </a>
          <p
            class="mt-2 text-3xl font-bold spacing-sm leading-none"
            style="cursor: auto"
          >
            5,000
          </p>
        </div>
        <div
          class="metric-card bg-slate-900 border border-gray-900 text-white rounded-lg p-4 max-w-72 w-full"
          style="cursor: auto"
        >
          <a
            aria-label="Unsplash Views"
            target="_blank"
            rel="noopener noreferrer"
            href="https://stackdiary.com/"
          >
            <div
              class="flex items-center justify-between mb-4"
              style="cursor: auto"
            >
              Contas Cadastradas               <svg
                class="h-4 w-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
            </div>
          </a>
          <p
            class="mt-2 text-3xl font-bold spacing-sm leading-none"
            style="cursor: auto"
          >
            3,641
          </p>
        </div>
      </div>
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
        <div
          class="metric-card bg-slate-900 text-white border border-gray-900 rounded-lg p-4 max-w-72 w-full"
          style="cursor: auto"
        >
          <a
            aria-label="YouTube Subscribers"
            target="_blank"
            rel="noopener noreferrer"
            href="https://stackdiary.com/"
          >
            <div
              class="flex items-center justify-between mb-4"
              style="cursor: auto"
            >
              Visualizações diárias 
              <svg
                class="h-4 w-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
            </div>
          </a>
          <p
            class="mt-2 text-3xl font-bold spacing-sm leading-none"
            style="cursor: auto"
          >
            2570
          </p>
        </div>
        <div
          class="metric-card bg-slate-900 text-white border border-gray-900 rounded-lg p-4 max-w-72 w-full"
          style="cursor: auto"
        >
          <a
            aria-label="YouTube Views"
            target="_blank"
            rel="noopener noreferrer"
            href="https://stackdiary.com/"
          >
            <div class="flex items-center justify-between mb-4">
              Países disponíveis 
              <svg
                class="h-4 w-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style="cursor: auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
            </div>
          </a>
          <p
            class="mt-2 text-3xl font-bold spacing-sm leading-none"
            style="cursor: auto"
          >
            5
          </p>
        </div>
      </div>
    </div>
    
  </div>
</template>
