<template>
  <div
    class="h-full bg-gradient-to-t from-yellow-300 via-yellow-300 to-yellow-300"
  >
    <div class="flex items-start max-w-2xl min-h-screen mx-auto">
      <div class="relative bg-yellow-300">
        <img
          src="../assets/images/controller2.jpeg"
          alt=""
          class="object-cover w-auto -mt-12"
        />
        <!-- <h1
              class="text-4xl font-extrabold leading-6 tracking-tight text-gray-500 sm:leading-none lg:text-6xl "
            >
              <span class="inline uppercase md:block mix-blend-multiply">Are You Ready To Game?</span>
              
            </h1> -->
        <div class="absolute inset-x-0 text-center top-10">
          <div class="text-4xl font-black">Fadl Afridi</div>
          <div class="uppercase text-light">presents</div>
        </div>

        <div
          class="absolute inset-x-0 flex items-center justify-center px-8 text-center md:top-72 top-40 "
        >
          <div>
            <div class="py-4">
              <div
                class="text-5xl font-black text-yellow-900 uppercase mix-blend-color-burn "
              >
                2021
              </div>
              <div
                class="text-3xl font-extrabold text-transparent uppercase md:text-6xl bg-clip-text bg-gradient-to-b from-yellow-800 to-yellow-800 "
              >
                Independence
              </div>
              <div class="text-4xl uppercase">Tournament</div>

              <div class="max-w-xl pt-6 mx-auto font-bold uppercase">
                <div class="text-5xl">
                  August <span class="font-extrabold">15th</span>
                </div>
                <div class="text-3xl">Bangalore</div>
                <div class="flex items-center justify-center pt-6">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/FIFA_21_logo.svg/1200px-FIFA_21_logo.svg.png"
                    alt=""
                    class="w-64"
                  />
                </div>

                <div class="mt-4">
                  Calling all FIFA lovers! <br />
                  Share your love with fellow gamers at one of the <br />biggest
                  FIFA tournaments of the year.
                  <br />
                  Pre-register today!
                </div>

                <div class="py-4">
                  <div class="text-gray-600">grand prize</div>
                  <div class="text-3xl font-black uppercase">Playstation 5</div>
                  <div class="text-xl font-bold uppercase">
                    Plus cash prizes
                  </div>
                </div>

                <div class="py-4">
                  <div class="text-gray-600">entry fee</div>
                  <div class="text-5xl font-black uppercase">₹600</div>
                </div>
              </div>

              <div
                class="max-w-6xl px-10 py-8 mt-6 text-center text-gray-200 bg-gray-600 shadow rounded-xl "
              >
                <h2
                  class="m-0 text-xl font-semibold leading-tight tracking-tight border-0 border-gray-200 sm:text-5xl "
                >
                  Get Notified
                </h2>

                <p class="my-2 mb-6 text-base">
                  Enter your phone number and email address to be notified when
                  tournament details are announced.
                </p>

                <button
                  @click="clickHandler"
                  class="px-6 py-2 text-xl font-semibold text-gray-100 uppercase bg-gray-700 rounded-full "
                >
                  Register
                </button>
              </div>

              <!-- Instagram -->
              <div class="pt-6">
                <div class="font-bold uppercase">Get in touch</div>
                <a href="https://www.instagram.com/fadlafridi/" target="_blank">
                  <div class="flex items-center justify-center">
                    <div>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path
                          d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                        ></path>
                      </svg>
                    </div>
                    <span class="pl-1 text-xl">@<span class="font-semibold">fadl</span>afridi</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- registration modal -->

    <!-- Confirmation modal -->
    <!-- <div
      v-if="isActive"
      class="fixed inset-0 z-10 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0 "
      >kgkgkjgkg</div>
    </div> -->

    <div
      v-if="isActive"
      class="fixed inset-0 z-10 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0 "
      >
        <div
          class="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75"
          aria-hidden="true"
        ></div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="inline-block overflow-hidden text-left align-bottom transition-all transform rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full "
        >
          <div class="px-4 pt-5 pb-4 bg-yellow-300 sm:p-6 sm:pb-4">
            <div class="w-full text-center">
              <div
                class="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 "
              >
                <div class="w-full max-w-md space-y-8">
                  <div v-if="!isRegistered">
                    <h2
                      class="px-6 text-3xl font-extrabold text-center text-gray-600 "
                    >
                      Enter your<br />
                      contact details
                    </h2>

                    <div class="mt-8 space-y-6">
                      <div class="space-y-2 rounded-md">
                        <div>
                          <label for="email-address" class="sr-only"
                            >Email address</label
                          >
                          <input
                            v-model="email"
                            id="email-address"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required
                            class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                            placeholder="Email address"
                          />
                        </div>
                        <div>
                          <label for="phone" class="sr-only"
                            >Phone number</label
                          >
                          <input
                            v-model="phoneno"
                            id="phone"
                            name="phone"
                            type="tel"
                            autocomplete="true"
                            required
                            class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                            placeholder="Phone number"
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          class="relative flex justify-center w-full px-4 py-3 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md group hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 "
                        >
                          <span
                            class="absolute inset-y-0 left-0 flex items-center pl-3 "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </span>
                          <span
                            @click="registerUser"
                            class="font-bold txt-xl"
                            >{{ registerBtnText }}</span
                          >
                        </button>
                      </div>
                    </div>
                  </div>

                  <div v-if="isRegistered">
                    <div class="w-12 mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-12 h-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div class="pt-2 font-semibold">{{ email }}</div>
                    <div class="pt-4 font-bold uppercase">
                      Thank you for pre-registering!
                    </div>

                    <div class="px-6 py-4">
                      We will inform you with details of the tournament as soon
                      as it is announced.
                    </div>

                    <button class="px-6 py-2 text-xl font-semibold text-gray-100 uppercase bg-gray-700 rounded-full " @click="clickHandler">okay, great</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@nuxtjs/composition-api";
export default {
  layout: "blog",
  setup() {
    const email = ref("");
    const phoneno = ref("");

    const isActive = ref(false);
    const isRegistered = ref(false);
    const registerBtnText = ref("Register");

    const registerUser = async (e) => {
      console.log('clicked', e);
      e.preventDefault();
      if (email.value && phoneno.value) {
        registerBtnText.value = "Registering...";
        let res = await fetch(
          `https://tinkr.api.stdlib.com/playground@dev/fadl/?email=${email.value}&phone=${phoneno.value}`
        );

        let result = await res.json();
        console.log("result", email.value, phoneno.value, result);

        isRegistered.value = !isRegistered.value;
      }
    };

    const clickHandler = async () => {
      email.value = "";
      phoneno.value = "";
      isActive.value = !isActive.value;
      registerBtnText.value = "Register";
      
    };

    const showConfirmation = (e) => {
      e.preventDefault();
      isRegistered.value = !isRegistered.value;
    };

    return {
      clickHandler,
      showConfirmation,
      registerUser,
      email,
      phoneno,
      registerBtnText,
      isActive,
      isRegistered,
    };
  },
};
</script>

<style>
body {
  background: #fcd34d;
}
</style>