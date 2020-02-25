const staticList = [
  [
    {
      path: '/business/businessProject',
      name: 'BusinessProject',
      functionId: '07f3f2ff-49e8-489f-83a8-58f4bfe19b63',
      enabled: 1,
      title: '商业项目'
    },
    {
      path: '/business/formatMaintain',
      name: 'FormatMaintain',
      functionId: '643c34ad-2ce7-4642-a0df-e7c9ddddccfa',
      enabled: 1,
      title: '商业业态'
    },
    {
      path: '/business/brandManage',
      name: 'BrandManage',
      functionId: '3e24844b-621d-4de2-a160-970ac048efe4',
      enabled: 1,
      title: '商业品牌'
    },
    {
      path: '/business/managerCompany',
      name: 'ManagerCompany',
      functionId: '0787c551-00d7-4c16-86c0-e54a8f5759e4',
      enabled: 1,
      title: '商管公司'
    },
    {
      path: '/business/contact',
      name: 'Contact',
      functionId: '9fa82b10-1798-4166-add0-be3140e644b9',
      enabled: 1,
      title: '联系人'
    },
    {
      path: '/business/earlyWarning',
      name: 'EarlyWarning',
      functionId: 'b187a3a0-7dd5-11e9-bfbe-00163e0968b3',
      enabled: 1,
      title: '工作预警'
    },
    {
      path: '/business/workSheet',
      name: 'WorkSheet',
      functionId: '9b438363-d86c-11e9-8bf4-00163e0968b3',
      enabled: 1,
      title: '工单'
    },
    {
      path: '/business/dataItem',
      name: 'DataItem',
      functionId: '259b8be9-15ac-4278-b97a-e1c4e8dc16cd', // 树
      enabled: 1,
      title: '自定数据'
    }
  ],
  [
    {
      path: '/build/buildingMaintain',
      name: 'BuildingMaintain',
      functionId: 'e066b7f5-19b6-454d-b3ad-dfa1bdc0dec1',
      enabled: 1,
      title: '大楼'
    },
    {
      path: '/build/floorMaintain',
      name: 'BusinessProject',
      functionId: 'efd772b9-5618-4c79-9585-bff12e6cb8ee',
      enabled: 1,
      title: '楼层'
    },
    {
      path: '/build/positionMaintain',
      name: 'PositionMaintain',
      functionId: '8f927897-20c8-4b94-8dae-e689239aa7f2',
      enabled: 1,
      title: '点位'
    }
  ],
  [
    {
      path: '/merchant/merchantManage',
      name: 'MerchantManage',
      functionId: '3bf81ed1-6512-418d-be79-a691d8c0dc0d',
      enabled: 1,
      title: '商户'
    },
    {
      path: '/merchant/merchantSettle',
      name: 'merchantSettle',
      functionId: '6942b6d6-eafd-11e8-8fae-00163e0968b3',
      enabled: 1,
      title: '商户结算'
    },
    {
      path: '/merchant/feedback',
      name: 'Feedback',
      functionId: 'e7beb0f8-e654-11e9-8bf4-00163e0968b3',
      enabled: 1,
      title: '意见反馈'
    },
    {
      path: '/merchant/turnover',
      name: 'Turnover',
      functionId: 'f1e3ec12-ea3f-11e9-8bf4-00163e0968b3',
      enabled: 1,
      title: '业绩录入'
    },
    {
      path: '/merchant/memberStat',
      name: 'MemberStat',
      functionId: 'be0dd1e1-0632-11ea-8bf4-00163e0968b3',
      enabled: 1,
      title: '会员积分'
    }
  ],
  [
    {
      path: '/shop/shopManage',
      name: 'ShopManage',
      functionId: 'df4a6d3f-31fc-4ded-833e-012444dfaccc',
      enabled: 1,
      title: '商铺'
    },
    {
      path: '/shop/merchantLog',
      name: 'merchantLog',
      functionId: '39a56822-7dd5-11e9-bfbe-00163e0968b3',
      enabled: 1,
      title: '商铺日志'
    }
  ],
  [
    {
      path: '/contract/berthContract',
      name: 'BerthContract',
      functionId: 'ab59a51e-3e93-49bf-b73c-d540f81814f3',
      enabled: 1,
      title: '合同'
    },
    {
      path: '/contract/contractStop',
      name: 'ContractStop',
      functionId: '16ada843-8089-48a8-bb1c-32c6890638af',
      enabled: 1,
      title: '终止合同'
    },
    {
      path: '/contract/invoiceFee',
      name: 'InvoiceFee',
      functionId: '89bbad1d-7c9d-43d2-975e-561d1fff749c',
      enabled: 1,
      title: '临时费用'
    },
    {
      path: '/contract/feeType',
      name: 'FeeType',
      functionId: 'a1aab328-840e-4edf-80b6-ddb1673190fe',
      enabled: 1,
      title: '费用类别'
    }
  ],
  [
    {
      path: '/fee/orderManage',
      name: 'OrderManage',
      functionId: 'b096385e-3d11-4b84-af0d-6bd96dfb6aa3',
      enabled: 1,
      title: '账单'
    },
    {
      path: '/fee/gatherManage',
      name: 'GatherManage',
      functionId: '8be58a27-4579-44d7-8578-8f4846c7b654',
      enabled: 1,
      title: '收款记录'
    }
  ],
  [
    {
      path: '/doc/docs',
      name: 'Doc',
      functionId: '391a046c-feaf-11e8-9282-00163e0968b3',
      enabled: 1,
      title: '单据'
    },
    {
      path: '/doc/docTemplate',
      name: 'Doc',
      functionId: '5c0275d2-feae-11e8-9282-00163e0968b3',
      enabled: 1,
      title: '单据模板'
    }
  ],
  [
    {
      path: '/system/billApproval',
      name: 'BillApproval',
      functionId: 'abecc4e2-a1d7-4eb5-96d2-2e0f5f6166c9',
      enabled: 1,
      title: '审批配置'
    },
    {
      path: '/system/billFlow',
      name: 'BillFlow',
      functionId: '1df6c8dd-c020-4b9e-8ac7-55e9688a3e31',
      enabled: 1,
      title: '审批记录'
    }
  ],
  [
    {
      path: '/userData/userManage',
      name: 'UserManage',
      functionId: 'cbc2d57b-2419-4a2b-9292-e6bdb3f0b794',
      // 7331a08f-367c-4f39-8980-04188e40ffb9部门树fa64cdf3-0387-45df-bb62-cc9de4e95ba9部门多
      enabled: 1,
      title: '组织'
    },
    {
      path: '/userData/roleManage',
      name: 'RoleManage',
      functionId: 'd779f7c1-0dbf-4ecd-aa44-3a513900af54',
      enabled: 1,
      title: '角色'
    },
    {
      path: '/userData/powerManage',
      name: 'PowerManage',
      functionId: '6fe1ed40-e62c-4e3c-81d0-4b5c58bf71ad',
      enabled: 1,
      title: '权限'
    },
    {
      path: '/userData/pospalApi',
      name: 'PospalApi',
      functionId: 'c66decf5-803a-11e9-bfbe-00163e0968b3',
      enabled: 1,
      title: '银豹凭证'
    }
  ],
  [
    {
      path: '/traceable/traceableProduct',
      name: 'TraceableProduct',
      functionId: 'fac89aa3-5b9b-4d6b-b919-0e0fa447cd60',
      enabled: 1,
      title: '溯源产品'
    },
    {
      path: '/traceable/traceableSupplier',
      name: 'TraceableSupplier',
      functionId: 'c7ab6639-fb91-11e8-9282-00163e0968b3',
      enabled: 1,
      title: '溯源供货商'
    }
  ],
  [
    {
      path: '/chart/chart',
      name: 'Charts',
      functionId: 'e3b365b3-fce7-4ee4-b4ff-64fa38e6751d',
      enabled: 1,
      title: '概览'
    }
  ],
  [
    {
      path: '/dashboard/saleData',
      name: 'SaleData',
      functionId: 'f4560374-7dd5-11e9-bfbe-00163e0968b3',
      enabled: 1,
      title: '销售数据'
    },
    {
      path: '/dashboard/analysisData',
      name: 'AnalysisData',
      functionId: 'f480dbdb-7dd5-11e9-bfbe-00163e0968b3',
      enabled: 1,
      title: '市场经营分析'
    }
  ],
  [
    {
      path: '/report/merchantReport',
      name: 'MerchantReport',
      functionId: 'dfe9de42-77b0-11e9-bfbe-00163e0968b3',
      enabled: 1,
      title: '商铺报表'
    },
    {
      path: '/report/invoiceReport',
      name: 'InvoiceReport',
      functionId: 'a8d42f31-0145-11ea-8bf4-00163e0968b3',
      enabled: 1,
      title: '账单报表'
    },
    {
      path: '/report/depositeReport',
      name: 'DepositeReport',
      functionId: 'aa937802-f960-11e9-8bf4-00163e0968b3',
      enabled: 1,
      title: '保证金报表'
    },
    {
      path: '/report/accountReport',
      name: 'AccountReport',
      functionId: 'a8ded3b6-0145-11ea-8bf4-00163e0968b3',
      enabled: 1,
      title: '预付款报表'
    },
    {
      path: '/report/feeReport',
      name: 'FeeReport',
      functionId: '47a78e37-f932-11e9-8bf4-00163e0968b3',
      enabled: 1,
      title: '临时费用报表'
    },
    {
      path: '/report/scoreReport',
      name: 'ScoreReport',
      functionId: 'ed22d2fb-0791-11ea-8bf4-00163e0968b3',
      enabled: 1,
      title: '会员积分报表'
    },
    {
      path: '/report/transactionReport',
      name: 'TransactionReport',
      functionId: '91edbab1-0b81-11ea-8bf4-00163e0968b3',
      enabled: 1,
      title: '业绩录入报表'
    }
  ],
  [
    {
      path: '/invest/investManage',
      name: 'InvestManage',
      functionId: 'c6ea351c-fa25-11e9-8bf4-00163e0968b3',
      enabled: 1,
      title: '招商'
    }
  ],
  [
    {
      path: '/finance/accountMaintain',
      name: 'AccountMaintain',
      functionId: '50a2f7ea-a7b7-4a2a-8da9-65c4dde1ba3f',
      enabled: 1,
      title: '财会周期'
    },
    {
      path: '/finance/advanceManage',
      name: 'AdvanceManage',
      functionId: '5ee29115-5088-4cab-840a-34c32eccfa86',
      enabled: 1,
      title: '预付款'
    },
    {
      path: '/finance/depositManage',
      name: 'DepositManage',
      functionId: 'a02ed8c3-61d9-4345-8fc2-8398f01ef32e',
      enabled: 1,
      title: '保证金'
    }
  ]
]
// 这个是总接口，parentId，上面的几乎是获取多的
const levelList = [
  // 商业数据
  [
    {
      functionId: 'ab1e5fab-d2a1-4539-9c18-392167612a80',
      title: '商业项目'
    },
    {
      functionId: '56934e7c-7757-46f7-9772-2b467645a623',
      title: '业态'
    },
    {
      functionId: '6c34efdb-836d-4e84-85a5-d357297f5e9e',
      title: '商户经营品牌'
    },
    {
      functionId: '6709d33f-2600-4609-8248-ac26dcd262c0',
      title: '品牌'
    },
    {
      functionId: '3bc08e9d-29cf-4909-b0a6-282bb9e0f4b3',
      title: '商管公司'
    },
    {
      functionId: 'a55cb1ec-e4f7-4cd4-b491-b4571625243c',
      title: '联系人'
    },
    {
      functionId: '84de7d96-7dd5-11e9-bfbe-00163e0968b3',
      title: '工作预警'
    },
    {
      functionId: '4f643ce6-d86c-11e9-8bf4-00163e0968b3',
      title: '工单'
    },
    {
      functionId: '691a6cea-5699-4d41-ad39-c2d0cce0fe4b',
      title: '自定数据'
    }
  ],
  // 建筑管理
  [
    {
      functionId: '7f95704a-af33-4126-934d-fdbe34a2cec5',
      title: '大楼'
    },
    {
      functionId: '2a2f1e7f-f50d-4784-b7d1-89c188307b4d',
      title: '楼层'
    },
    {
      functionId: 'f75d4c28-dc1f-4201-a349-7c212310e1eb',
      title: '点位'
    }
  ],
  // 招商
  [
    {
      functionId: 'f07ee1c8-006e-11ea-8bf4-00163e0968b3',
      title: '招商'
    },
    {
      functionId: 'b8926887-ffa5-11e9-8bf4-00163e0968b3',
      title: '招商点位'
    },
    {
      functionId: 'c6ba5fa8-fa25-11e9-8bf4-00163e0968b3',
      title: '招商附件'
    },
    {
      functionId: 'edce8150-fa25-11e9-8bf4-00163e0968b3',
      title: '招商谈判'
    }
  ],
  // 商户管理
  [
    {
      functionId: '101b2171-e2c4-4857-8f31-ee919ad58796',
      title: '商户'
    },
    {
      functionId: '9507d7c6-55e5-4d00-aa23-c51669e9f9d9',
      title: '商铺' // 商户结算在商铺接口里面
    },
    {
      functionId: 'a8235628-e654-11e9-8bf4-00163e0968b3',
      title: '意见反馈'
    },
    {
      functionId: '8acc72aa-ea3f-11e9-8bf4-00163e0968b3',
      title: '业绩录入'
    },
    {
      functionId: '98d31132-0632-11ea-8bf4-00163e0968b3',
      title: '会员积分'
    }
  ],
  // 商铺管理
  [
    {
      functionId: '9507d7c6-55e5-4d00-aa23-c51669e9f9d9',
      title: '商铺' // 商户结算在商铺接口里面
    },
    {
      functionId: '39a56822-7dd5-11e9-bfbe-00163e0968b3',
      title: '商铺日志'
    }
  ],
  // 合同管理
  [
    {
      functionId: '97b22caf-4987-40c7-91bc-e3f8a461fe6f',
      title: '附件'
    },
    {
      functionId: 'ad665944-8de2-40bf-955d-4a156574689a',
      title: '合同'
    },
    {
      functionId: 'bfd951cb-f45b-47ad-95f9-3e0854199344',
      title: '合同公式'
    },
    {
      functionId: '6c0190c9-cb2d-47db-8f19-fd889f662aed',
      title: '合同公式抽成比例'
    },
    {
      functionId: '955f123e-d3cf-4d78-a931-4a400daf903b',
      title: '合同终止'
    },
    {
      functionId: 'b94d50d1-93e6-4e65-8060-1333e389af88',
      title: '费用类别'
    },
    {
      functionId: '12adca9e-6e35-4f29-b5fc-31c2e8a57e3e',
      title: '临时费用'
    }
  ],
  // 账单管理
  [
    {
      functionId: '8f6a4718-874f-4c7b-b132-5c62621975c2',
      title: '账单'
    },
    {
      functionId: '2d8a3edd-4833-484d-a995-e95787bde21b',
      title: '账单详细'
    },
    {
      functionId: 'd8f395e9-874e-4cfc-ac98-2d20704bdb8b',
      title: '账单收款'
    },
    {
      functionId: '7ad0de3a-fb1c-11e9-8bf4-00163e0968b3',
      title: '账单收款明细'
    }
  ],
  // 财务
  [
    {
      functionId: '1e0b254e-1aee-4ca6-b93b-e861b4e44606',
      title: '会计期'
    },
    {
      functionId: '0bc2711c-4b83-41b5-b58f-eff97af0fb59',
      title: '保证金'
    },
    {
      functionId: 'b6b47108-fa7d-11e9-8bf4-00163e0968b3',
      title: '保证金明细'
    },
    {
      functionId: '6cc63d28-ea49-416b-a05c-ce3af26ca0be',
      title: '预付款'
    },
    {
      functionId: '93ae38c4-fa7d-11e9-8bf4-00163e0968b3',
      title: '预付款明细'
    }
  ],
  // 单据管理
  [
    {
      functionId: 'f50d984e-feae-11e8-9282-00163e0968b3',
      title: '单据'
    },
    {
      functionId: '0eecdd32-feae-11e8-9282-00163e0968b3',
      title: '单据模板'
    },
    {
      functionId: '7a8e594f-feae-11e8-9282-00163e0968b3',
      title: '单据模板字段'
    },
    {
      functionId: 'd9dc8412-feaf-11e8-9282-00163e0968b3',
      title: '单据字段'
    }
  ],
  // 审批管理
  [
    {
      functionId: 'f41979b8-9e2b-4910-9b98-bc60340d3ece',
      title: '审批参数'
    },
    {
      functionId: 'fe479fd2-fa08-451d-a5d0-b6a88b9f1e43',
      title: '审批参数节点'
    },
    {
      functionId: '9d6fd68c-505e-4032-9c72-8f43fed4d882',
      title: '审批记录'
    }
  ],
  // 溯源管理
  [
    {
      functionId: '38925d9e-8069-47dc-ba5e-b6e9ab1028d5',
      title: '溯源产品'
    },
    {
      functionId: '7e507fae-fb91-11e8-9282-00163e0968b3',
      title: '溯源供货商'
    }
  ],
  // 用户管理
  [
    {
      functionId: '00b4162f-31d3-4f7d-af03-dc2141431759',
      title: '部门'
    },
    {
      functionId: '84f3a451-9773-4d8d-9c1f-56634e1ec805',
      title: '功能'
    },
    {
      functionId: 'd9e65d10-529c-4df2-9aa4-9072703ed17c',
      title: '角色'
    },
    {
      functionId: '3f11d3b8-b7f1-40f1-9184-a91ad67a7c4c',
      title: '角色功能'
    },
    {
      functionId: '274c3aaa-3e0f-430c-acc5-596224d2b7f2',
      title: '员工'
    },
    {
      functionId: 'c66decf5-803a-11e9-bfbe-00163e0968b3',
      title: '银豹凭证'
    }
  ],
  // 图表管理
  [
    {
      functionId: 'e3b365b3-fce7-4ee4-b4ff-64fa38e6751d',
      title: '图表'
    }
  ],
  // 报表管理
  [
    {
      functionId: '5e88caa4-f72d-11e9-8bf4-00163e0968b3',
      title: '报表'
    }
  ],
  // 看板数据
  [
    {
      functionId: 'e3b365b3-fce7-4ee4-b4ff-64fa38e6751d',
      title: '概览'
    }
  ],
  // 会员中心
  [
    {
      functionId: '912d21cb-f498-11e9-8bf4-00163e0968b3',
      title: '会员中心'
    }
  ]
]

const baseList = [
  '48e8d149-011d-4ed1-aede-98788e079a4b', // 获取员工功能
  'bb2fb7f4-6166-42a9-98c2-5382989cfaac', // 修改密码
  'bb2fb7f4-6166-42a9-98c2-5382989cfaac' // 修改密码
]
const contractList = [
  'ad665944-8de2-40bf-955d-4a156574689a', // 合同全部功能
  '3d3a527c-fa1e-11e9-8bf4-00163e0968b3', // 合同附件全部功能
  'bfd951cb-f45b-47ad-95f9-3e0854199344', // 合同公式全部功能
  '6c0190c9-cb2d-47db-8f19-fd889f662aed', // 合同公式抽成比例全部功能
  '1e0b254e-1aee-4ca6-b93b-e861b4e44606', // 财会周期全部功能
  '935fb9b0-47c2-4776-b2bc-f4eb06ef4da4', // 生成周期账单
  '04956c6e-2f33-46fc-8c44-68f10e3f48e9', // 生成首期账单
  '643c34ad-2ce7-4642-a0df-e7c9ddddccfa', // 获取业态（多）
  'a57e5a6c-b046-4d8c-973f-cc780d97b1eb', // 获取商户（单）
  '3bf81ed1-6512-418d-be79-a691d8c0dc0d', // 获取商户（多）
  '27509499-3a21-4c6b-821c-069b2fbb2486', // 获取点位（单）
  'f0d4f380-05db-11ea-8bf4-00163e0968b3', // 获取员工角色
  '8f927897-20c8-4b94-8dae-e689239aa7f2', // 获取点位（多）
  '3e24844b-621d-4de2-a160-970ac048efe4', // 获取品牌（多）
  '727bf115-0f0e-462d-93b2-51aa81153012', // 获取商户经营品牌（多）
  'cbc2d57b-2419-4a2b-9292-e6bdb3f0b794', // 获取员工（多）
  '3bc08e9d-29cf-4909-b0a6-282bb9e0f4b3', // 商管公司
  'abecc4e2-a1d7-4eb5-96d2-2e0f5f6166c9', // 获取审批参数（多）
  'd779f7c1-0dbf-4ecd-aa44-3a513900af54', // 获取角色（多）
  'cdfea64c-9d8f-4cff-86a6-2d970fd3d584', // 获取业态（树）
  '9a3ed955-8e43-443b-8dc7-b95936f87cb2', // 获取自定数据（多）
  'e066b7f5-19b6-454d-b3ad-dfa1bdc0dec1', // 获取大楼（多）
  'efd772b9-5618-4c79-9585-bff12e6cb8ee', // 获取楼层（多）
  'fa64cdf3-0387-45df-bb62-cc9de4e95ba9', // 获取部门（多）
  '7331a08f-367c-4f39-8980-04188e40ffb9', // 获取部门（树）
  'df4a6d3f-31fc-4ded-833e-012444dfaccc', // 获取商铺（多）
  '97b22caf-4987-40c7-91bc-e3f8a461fe6f', // 附件
  'a1aab328-840e-4edf-80b6-ddb1673190fe' // 获取费用类别（多）
]
const businessList = [
  'ab1e5fab-d2a1-4539-9c18-392167612a80', // 商业项目
  '97b22caf-4987-40c7-91bc-e3f8a461fe6f', // 附件
  '56934e7c-7757-46f7-9772-2b467645a623', // 业态
  '6709d33f-2600-4609-8248-ac26dcd262c0', // 品牌
  '3bc08e9d-29cf-4909-b0a6-282bb9e0f4b3', // 商管公司
  'a55cb1ec-e4f7-4cd4-b491-b4571625243c', // 联系人
  '84de7d96-7dd5-11e9-bfbe-00163e0968b3', // 工作预警
  '4f643ce6-d86c-11e9-8bf4-00163e0968b3', // 工单
  'd2a7bf30-e971-11e9-8bf4-00163e0968b3', // 工单进度
  '691a6cea-5699-4d41-ad39-c2d0cce0fe4b', // 自定数据
  '3bf81ed1-6512-418d-be79-a691d8c0dc0d', // 获取商户（多）
  'd779f7c1-0dbf-4ecd-aa44-3a513900af54', // 获取角色（多）
  'cbc2d57b-2419-4a2b-9292-e6bdb3f0b794' // 获取员工（多）
]
const buildList = [
  '7f95704a-af33-4126-934d-fdbe34a2cec5', // 大楼
  '2a2f1e7f-f50d-4784-b7d1-89c188307b4d', // 楼层
  'f75d4c28-dc1f-4201-a349-7c212310e1eb' // 点位
]
const investList = [
  'f07ee1c8-006e-11ea-8bf4-00163e0968b3', // 招商
  'b8926887-ffa5-11e9-8bf4-00163e0968b3', // 招商点位
  'c6ba5fa8-fa25-11e9-8bf4-00163e0968b3', // 招商附件
  'edce8150-fa25-11e9-8bf4-00163e0968b3', // 招商谈判
  'cbc2d57b-2419-4a2b-9292-e6bdb3f0b794', // 获取员工（多）
  '8f927897-20c8-4b94-8dae-e689239aa7f2' // 获取点位（多）
]
const tenantList = [
  '98d31132-0632-11ea-8bf4-00163e0968b3', // 积分统计
  '101b2171-e2c4-4857-8f31-ee919ad58796', // 商户
  'a8235628-e654-11e9-8bf4-00163e0968b3', // 商户意见反馈
  'edce8150-fa25-11e9-8bf4-00163e0968b3', // 招商谈判
  '9507d7c6-55e5-4d00-aa23-c51669e9f9d9', // 商铺
  '8acc72aa-ea3f-11e9-8bf4-00163e0968b3', // 业绩录入
  '39a56822-7dd5-11e9-bfbe-00163e0968b3', // 商铺日志
  '07f3f2ff-49e8-489f-83a8-58f4bfe19b63' // 获取商业项目
]
const orderList = [
  '955f123e-d3cf-4d78-a931-4a400daf903b', // 合同终止
  '12adca9e-6e35-4f29-b5fc-31c2e8a57e3e', // 临时费用
  'b94d50d1-93e6-4e65-8060-1333e389af88', // 费用类别
  '8f6a4718-874f-4c7b-b132-5c62621975c2', // 账单
  '2d8a3edd-4833-484d-a995-e95787bde21b', // 账单明细
  'd8f395e9-874e-4cfc-ac98-2d20704bdb8b', // 账单收款
  '7ad0de3a-fb1c-11e9-8bf4-00163e0968b3', // 账单收款明细
  '6cc63d28-ea49-416b-a05c-ce3af26ca0be', // 预付款
  '93ae38c4-fa7d-11e9-8bf4-00163e0968b3', // 预付款明细
  '0bc2711c-4b83-41b5-b58f-eff97af0fb59', // 保证金
  'b6b47108-fa7d-11e9-8bf4-00163e0968b3', // 保证金明细
  'd8f395e9-874e-4cfc-ac98-2d20704bdb8b', // 账单收款
  '7ad0de3a-fb1c-11e9-8bf4-00163e0968b3' // 账单收款明细
]

const docList = [
  'd779f7c1-0dbf-4ecd-aa44-3a513900af54', // 获取角色（多）
  'f50d984e-feae-11e8-9282-00163e0968b3', // 单据
  '0eecdd32-feae-11e8-9282-00163e0968b3', // 单据模板
  '7a8e594f-feae-11e8-9282-00163e0968b3', // 单据模板字段
  'abecc4e2-a1d7-4eb5-96d2-2e0f5f6166c9', // 获取审批参数（多）
  'd9dc8412-feaf-11e8-9282-00163e0968b3',
  'fa64cdf3-0387-45df-bb62-cc9de4e95ba9', // 获取部门（多）
  '7331a08f-367c-4f39-8980-04188e40ffb9' // 获取部门（树） // 单据字段
]

const billList = [
  'd779f7c1-0dbf-4ecd-aa44-3a513900af54', // 获取角色（多）
  'f41979b8-9e2b-4910-9b98-bc60340d3ece', // 审批参数
  'fe479fd2-fa08-451d-a5d0-b6a88b9f1e43', // 审批参数节点
  '9d6fd68c-505e-4032-9c72-8f43fed4d882' // 审批记录
]

const traceableList = [
  '97b22caf-4987-40c7-91bc-e3f8a461fe6f', // 附件
  '38925d9e-8069-47dc-ba5e-b6e9ab1028d5', // 溯源产品
  '7e507fae-fb91-11e8-9282-00163e0968b3' // 溯源供应商
]

const userList = [
  '00b4162f-31d3-4f7d-af03-dc2141431759', // 部门
  '84f3a451-9773-4d8d-9c1f-56634e1ec805', // 功能
  'd9e65d10-529c-4df2-9aa4-9072703ed17c', // 角色
  '3f11d3b8-b7f1-40f1-9184-a91ad67a7c4c', // 角色功能
  '274c3aaa-3e0f-430c-acc5-596224d2b7f2', // 员工
  'df4a6d3f-31fc-4ded-833e-012444dfaccc' // 获取商铺（多）
]

const showList = [
  'e3b365b3-fce7-4ee4-b4ff-64fa38e6751d', // 图表/数据
  '5e88caa4-f72d-11e9-8bf4-00163e0968b3', // 报表
  '0787c551-00d7-4c16-86c0-e54a8f5759e4', // 获取商管公司（多）
  'a1aab328-840e-4edf-80b6-ddb1673190fe' // 获取费用类别（多）
]

const vipList = [
  '912d21cb-f498-11e9-8bf4-00163e0968b3' // 图表/数据
]
export default {
  staticList,
  levelList,
  baseList,
  contractList,
  businessList,
  buildList,
  investList,
  tenantList,
  orderList,
  docList,
  billList,
  traceableList,
  userList,
  showList,
  vipList
}
