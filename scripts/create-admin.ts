import configPromise from '@payload-config'
import { getPayload } from 'payload'

async function createOrUpdateAdmin() {
  const email = process.argv[2]
  const password = process.argv[3]
  const name = process.argv[4] || 'Administrador'

  if (!email || !password) {
    console.log('---------------------------------------------------------')
    console.log('📌 Script de Criação / Reset de Admin - Payload CMS')
    console.log('Uso:')
    console.log('  pnpm tsx scripts/create-admin.ts <email> <senha> [nome]')
    console.log('Exemplo:')
    console.log('  pnpm tsx scripts/create-admin.ts admin@lira.com.br MinhaSenha123 "Admin Lira"')
    console.log('---------------------------------------------------------')
    process.exit(1)
  }

  console.log(`Conectando ao Payload CMS...`)
  const payload = await getPayload({ config: configPromise })

  const existing = await payload.find({
    collection: 'users',
    where: {
      email: { equals: email },
    },
    limit: 1,
  })

  if (existing.docs.length > 0) {
    const user = existing.docs[0]
    await payload.update({
      collection: 'users',
      id: user.id,
      data: {
        password,
        name,
      },
    })
    console.log(`✅ Sucesso: Senha do usuário "${email}" foi atualizada!`)
  } else {
    await payload.create({
      collection: 'users',
      data: {
        email,
        password,
        name,
      },
    })
    console.log(`✅ Sucesso: Administrador "${email}" criado com sucesso!`)
  }

  process.exit(0)
}

createOrUpdateAdmin().catch((err) => {
  console.error('❌ Erro ao criar ou atualizar usuário admin:', err)
  process.exit(1)
})
