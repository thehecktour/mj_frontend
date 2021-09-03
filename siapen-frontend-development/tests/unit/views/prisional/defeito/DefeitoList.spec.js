/* eslint-disable */

import { shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";

import i18n from "@/plugins/i18n";
import VTable from "@/components/VTable";
import DefeitoList from "@/views/prisional/defeito/list";

const router = new VueRouter();

const wrapper = shallowMount(DefeitoList, {
  i18n,
  router,
  propsData: {
    router: "defeito",
  },
});

describe("DefeitoList", () => {
  it("Verifica se o componente de tabela foi carregado", () => {
    const table = wrapper.findComponent(VTable);
    expect(table.exists()).toBe(true);
  });
});
