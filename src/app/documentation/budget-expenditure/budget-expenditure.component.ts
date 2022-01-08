import { Component, ChangeDetectionStrategy } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-budget-expenditure',
  templateUrl: './budget-expenditure.component.html',
  styleUrls: ['./budget-expenditure.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetExpenditureComponent {

    instructions = `
    # Despesa Orçamentária

    ## Tipo: BudgetExpenditure
    
    O tipo BudgetExpenditure possui diferentes propriedades para representação de informações referentes às despesas orçamentárias, compromisso de gasto de recursos públicos, autorizados pelo Poder competente, com o intuito de atender a uma necessidade coletiva prevista no orçamento. Também estão aqui inseridas as propriedades referentes aos empenhos de despesa, por meio do qual realiza-se reserva de valores monetários autorizados para atender um fim específico que cria para o município uma obrigação de pagamento pendente. A seguir estão os nomes das propriedades definidas pelo tipo:
    
    | PROPRIEDADE | TIPO ESPERADO | DESCRIÇÃO |
    | ------ | ------ | ------ |
    | FixedAmount | number:float | Campo monetário contendo o valor do orçamento fixado pela Lei Orçamentária Anual |
    | PaymentAmount | number:float | Campo monetário contendo o valor pago da despesa orçamentária |
    | ManagementUnitName | text | Campo texto contendo o nome da unidade gestora |
    | ManagementUnitID | text | Campo texto contendo o código da unidade gestora |
    | BudgetExpenditureFunction | text | Campo texto contendo a descrição da função/finalidade da despesa orçamentária |
    | BudgetExpenditureSubfunction | text | Campo texto contendo a descrição da subfunção da despesa orçamentária |
    | BudgetExpenditureProgram | text | Campo texto contendo o programa da despesa orçamentária |
    | BudgetExpenditureAction | text | Campo texto contendo a ação da despesa orçamentária |
    | EconomicCategory | text | Campo referente à classificação da categoria econômica da despesa orçamentária |
    | BudgetNature| text | Campo referente à classificação da natureza da despesa orçamentária |
    | BudgetExpenditureModality | text | Campo texto contendo a modalidade da despesa orçamentária |
    | BudgetExpenditureElement | text |  Campo texto contendo o elemento da despesa orçamentária |
    | ComittedExpenditureID | text | Campo referente ao número da nota de empenho da despesa orçamentária licitada |
    | ComittedExpenditureDate | date | Data do empenho da despesa orçamentária licitada (formato DD/MM/YYYY)|
    | CreditorName | text | Campo texto contendo o nome do favorecido |
    | IdentificationNumber | text | Campo texto contendo o CPF ou CNPJ do favorecido |
    | BidID | text | Campo texto referente ao número de ordem da licitação da despesa orçamentária licitada |
    | BidModality | text | Campo texto contendo o nome da modalidade de licitação da despesa orçamentária licitada |
    | ComittedValue | number:float | Campo referente ao valor empenhado da despesa orçamentária licitada |
    | ComittedExpenditureHistory | text | Campo texto contendo a descrição do histórico do empenho |
    
    Esse é um exemplo em HTML utilizando table
    
    \`\`\`html
    <table itemscope itemtype="https://app-turmalina.herokuapp.com/documentation/BudgetExpenditure">
      <!-- Cabeçalho da tabela  -->
      <tr>
        <th itemprop="managementUnitName">Nome da unidade gestora</th>
        <th itemprop="managementUnitID">Código da unidade gestora</th>
        <th itemprop="CreditorName">Favorecido</th>
        <th itemprop="IdentificationNumber">CPF/CNPJ do Favorecido</th>
        <th itemprop="FixedAmount">Valor Fixado da Despesa</th>
        <th itemprop="ComittedValue">Valor Empenhado</th>
        <th itemprop="PaymentAmount">Valor Pago</th>
        <th itemprop="ComittedExpenditureID">Código do Empenho</th>
        <th itemprop="ComittedExpenditureDate">Data do Empenho</th>
        <th itemprop="BidID">Número da licitação</th>
        <th itemprop="BidModality">Modalidade da Licitação</th>
        <th itemprop="BudgetExpenditureFunction">Função</th>
        <th itemprop="BudgetExpenditureSubfunction">Subfunção</th>
        <th itemprop="BudgetExpenditureProgram">Programa</th>
        <th itemprop="BudgetExpenditureAction">Ação</th>
        <th itemprop="EconomicCategory">Categoria Econômica</th>
        <th itemprop="BudgetNature">Grupo de Natureza da Despesa</th>
        <th itemprop="BudgetExpenditureModality">Modalidade da Despesa</th>
        <th itemprop="BudgetExpenditureElement">Elemento da Despesa</th>
        <th itemprop="ComittedExpenditureHistory">Histórico do Empenho</th>
      </tr>
    
      <!-- Dados referentes a certa linha da tabela  -->
      <tr>
        <td itemprop="ManagementUnitName">Fundo Municipal de Cultura</td>
        <td itemprop="ManagementUnitID">100301</td>
        <td itemprop="CreditorName">ALARIDO PRODUÇÕES ARTÍSTICAS LTDA</td>
        <td itemprop="IdentificationNumber">20.929.082/0001-60</td>
        <td itemprop="FixedAmount">1230000.00</td>
        <td itemprop="ComittedValue">300000.00</td>
        <td itemprop="PaymentAmount">300000.00</td>
        <td itemprop="ComittedExpenditureID">000006</td>
        <td itemprop="ComittedExpenditureDate">05/10/2021</td>
        <td itemprop="BidID">00002/2020</td>
        <td itemprop="BidModality">CONCURSO</td>
        <td itemprop="BudgetExpenditureFunction">13 -	Cultura</td>
        <td itemprop="BudgetExpenditureSubfunction">392 -	Difusão Cultural</td>
        <td itemprop="BudgetExpenditureProgram">5382 -	5382-PROGRAMA DE INCENTIVOS À CULTURA</td>
        <td itemprop="BudgetExpenditureAction">1415 -	PROGRAMA DE INCENTIVO A PROJETOS CULTURAIS BENEFICIADOS PELA LEI Nº 9560/2001</td>
        <td itemprop="EconomicCategory">3 -	DESPESAS CORRENTES</td>
        <td itemprop="BudgetNature">3 -	OUTRAS DESPESAS CORRENTES</td>
        <td itemprop="BudgetExpenditureModality">90 -	APLICAÇÕES DIRETAS</td>
        <td itemprop="BudgetExpenditureElement">33903103 -	PREMIAÇÕES CULTURAIS</td>
        <td itemprop="ComittedExpenditureHistory">VALOR REFERENTE AO PAGAMENTO DA PARCELA Nº 01/03 DO EDITAL Nº 002/2020 - PRÊMIO WALFREDO RODRIGUEZ DE PRODUÇÃO AUDIOVISUAL, PROCESSO Nº 010/2020 - FMC, PARA A EXECUÇÃO DAS AÇÕES DO PROJETO MALAIKA - MODALIDADE LOONGA METRAGEM, PELA ALARIDO PRODUÇÕES ARTÍSTICAS LTDA.</td>
      </tr>
    </table>
    \`\`\`
    
    Esse é um exemplo em HTML utilizando div
    
    \`\`\`html
    <div itemscope itemtype="https://app-turmalina.herokuapp.com/documentation/BudgetExpenditure">
      <!-- Cabeçalho da tabela  -->
      <div>
        <div itemprop="ManagementUnitName">Nome da unidade gestora</div>
        <div itemprop="ManagementUnitID">Código da unidade gestora</div>
        <div itemprop="CreditorName">Favorecido</div>
        <div itemprop="IdentificationNumber">CPF/CNPJ do Favorecido</div>
        <div itemprop="FixedAmount">Valor Fixado da Despesa</div>
        <div itemprop="ComittedValue">Valor Empenhado</div>
        <div itemprop="PaymentAmount">Valor Pago</div>
        <div itemprop="ComittedExpenditureID">Código do Empenho</div>
        <div itemprop="ComittedExpenditureDate">Data do Empenho</div>
        <div itemprop="BidID">Número da licitação</div>
        <div itemprop="BidModality">Modalidade da Licitação</div>
        <div itemprop="BudgetExpenditureFunction">Função</div>
        <div itemprop="BudgetExpenditureSubfunction">Subfunção</div>
        <div itemprop="BudgetExpenditureProgram">Programa</div>
        <div itemprop="BudgetExpenditureAction">Ação</div>
        <div itemprop="EconomicCategory">Categoria Econômica</div>
        <div itemprop="BudgetNature">Grupo de Natureza da Despesa</div>
        <div itemprop="BudgetExpenditureModality">Modalidade da Despesa</div>
        <div itemprop="BudgetExpenditureElement">Elemento da Despesa</div>
        <div itemprop="ComittedExpenditureHistory">Histórico do Empenho</div>
      </div>
      <!-- Dados referentes a certa linha da tabela  -->
      <div>
        <div itemprop="ManagementUnitName">Fundo Municipal de Cultura</div>
        <div itemprop="ManagementUnitID">100301</div>
        <div itemprop="CreditorName">ALARIDO PRODUÇÕES ARTÍSTICAS LTDA</div>
        <div itemprop="IdentificationNumber">20.929.082/0001-60</div>
        <div itemprop="FixedAmount">1230000.00</div>
        <div itemprop="ComittedValue">300000.00</div>
        <div itemprop="PaymentAmount">300000.00</div>
        <div itemprop="ComittedExpenditureID">000006</div>
        <div itemprop="ComittedExpenditureDate">05/10/2021</div>
        <div itemprop="BidID">00002/2020</div>
        <div itemprop="BidModality">CONCURSO</div>
        <div itemprop="BudgetExpenditureFunction">13 -	Cultura</div>
        <div itemprop="BudgetExpenditureSubfunction">392 -	Difusão Cultural</div>
        <div itemprop="BudgetExpenditureProgram">5382 -	5382-PROGRAMA DE INCENTIVOS À CULTURA</div>
        <div itemprop="BudgetExpenditureAction">1415 -	PROGRAMA DE INCENTIVO A PROJETOS CULTURAIS BENEFICIADOS PELA LEI Nº 9560/2001</div>
        <div itemprop="EconomicCategory">3 -	DESPESAS CORRENTES</div>
        <div itemprop="BudgetNature">3 -	OUTRAS DESPESAS CORRENTES</div>
        <div itemprop="BudgetExpenditureModality">90 -	APLICAÇÕES DIRETAS</div>
        <div itemprop="BudgetExpenditureElement">33903103 -	PREMIAÇÕES CULTURAIS</div>
        <div itemprop="ComittedExpenditureHistory">VALOR REFERENTE AO PAGAMENTO DA PARCELA Nº 01/03 DO EDITAL Nº 002/2020 - PRÊMIO WALFREDO RODRIGUEZ DE PRODUÇÃO AUDIOVISUAL, PROCESSO Nº 010/2020 - FMC, PARA A EXECUÇÃO DAS AÇÕES DO PROJETO MALAIKA - MODALIDADE LOONGA METRAGEM, PELA ALARIDO PRODUÇÕES ARTÍSTICAS LTDA.</td>
      </div>
    </div>
    \`\`\`
    `

}
