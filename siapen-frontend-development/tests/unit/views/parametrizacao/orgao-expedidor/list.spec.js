/* eslint-disable */

import { shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";

import i18n from "@/plugins/i18n";
import VTable from "@/components/VTable";
import list from "@/views/parametrizacao/orgao-expedidor/list";

const router = new VueRouter();

const wrapper = shallowMount(list, {
  i18n,
  router,
  propsData: {
    router: "orgao-expedidor",
  },
});

describe("list", () => {
  it("Verifica se o componente de tabela foi carregado", () => {
    const table = wrapper.findComponent(VTable);
    expect(table.exists()).toBe(true);
  });
});
