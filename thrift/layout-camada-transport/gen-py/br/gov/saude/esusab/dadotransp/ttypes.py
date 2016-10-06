#
# Autogenerated by Thrift Compiler (0.9.2)
#
# DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
#
#  options string: py
#

from thrift.Thrift import TType, TMessageType, TException, TApplicationException

from thrift.transport import TTransport
from thrift.protocol import TBinaryProtocol, TProtocol
try:
  from thrift.protocol import fastbinary
except:
  fastbinary = None



class VersaoThrift:
  """
  Indica a versão do dado a ser transportado. A versão do dado não necessariamente reflete a versão do sistema.

  Attributes:
   - major
   - minor
   - revision
  """

  thrift_spec = (
    None, # 0
    (1, TType.I32, 'major', None, None, ), # 1
    (2, TType.I32, 'minor', None, None, ), # 2
    (3, TType.I32, 'revision', None, None, ), # 3
  )

  def __init__(self, major=None, minor=None, revision=None,):
    self.major = major
    self.minor = minor
    self.revision = revision

  def read(self, iprot):
    if iprot.__class__ == TBinaryProtocol.TBinaryProtocolAccelerated and isinstance(iprot.trans, TTransport.CReadableTransport) and self.thrift_spec is not None and fastbinary is not None:
      fastbinary.decode_binary(self, iprot.trans, (self.__class__, self.thrift_spec))
      return
    iprot.readStructBegin()
    while True:
      (fname, ftype, fid) = iprot.readFieldBegin()
      if ftype == TType.STOP:
        break
      if fid == 1:
        if ftype == TType.I32:
          self.major = iprot.readI32();
        else:
          iprot.skip(ftype)
      elif fid == 2:
        if ftype == TType.I32:
          self.minor = iprot.readI32();
        else:
          iprot.skip(ftype)
      elif fid == 3:
        if ftype == TType.I32:
          self.revision = iprot.readI32();
        else:
          iprot.skip(ftype)
      else:
        iprot.skip(ftype)
      iprot.readFieldEnd()
    iprot.readStructEnd()

  def write(self, oprot):
    if oprot.__class__ == TBinaryProtocol.TBinaryProtocolAccelerated and self.thrift_spec is not None and fastbinary is not None:
      oprot.trans.write(fastbinary.encode_binary(self, (self.__class__, self.thrift_spec)))
      return
    oprot.writeStructBegin('VersaoThrift')
    if self.major is not None:
      oprot.writeFieldBegin('major', TType.I32, 1)
      oprot.writeI32(self.major)
      oprot.writeFieldEnd()
    if self.minor is not None:
      oprot.writeFieldBegin('minor', TType.I32, 2)
      oprot.writeI32(self.minor)
      oprot.writeFieldEnd()
    if self.revision is not None:
      oprot.writeFieldBegin('revision', TType.I32, 3)
      oprot.writeI32(self.revision)
      oprot.writeFieldEnd()
    oprot.writeFieldStop()
    oprot.writeStructEnd()

  def validate(self):
    if self.major is None:
      raise TProtocol.TProtocolException(message='Required field major is unset!')
    if self.minor is None:
      raise TProtocol.TProtocolException(message='Required field minor is unset!')
    if self.revision is None:
      raise TProtocol.TProtocolException(message='Required field revision is unset!')
    return


  def __hash__(self):
    value = 17
    value = (value * 31) ^ hash(self.major)
    value = (value * 31) ^ hash(self.minor)
    value = (value * 31) ^ hash(self.revision)
    return value

  def __repr__(self):
    L = ['%s=%r' % (key, value)
      for key, value in self.__dict__.iteritems()]
    return '%s(%s)' % (self.__class__.__name__, ', '.join(L))

  def __eq__(self, other):
    return isinstance(other, self.__class__) and self.__dict__ == other.__dict__

  def __ne__(self, other):
    return not (self == other)

class DadoInstalacaoThrift:
  """
  Dados para identificar a instalacao que cadastrou/gerou os dados e/ou enviou

  Attributes:
   - contraChave: Identifica o software que gerou o dado (pec/cds, cdsOff ou software de terceiros).
   - uuidInstalacao: É um identificador da instalação do software que gerou o dado. Seja ele o e-SUS ou software de terceiro.
   - cpfOuCnpj: Cpf do responsável ou CNPJ da empresa responsável
   - nomeOuRazaoSocial: Nome do responsável ou Razão Social da empresa responsável
   - fone: Telefone da pessoa ou empresa responsável
   - email: Email da pessoa ou empresa responsável
   - versaoSistema: Versão do software
   - nomeBancoDados: Nome do banco de dados que o software utiliza
  """

  thrift_spec = (
    None, # 0
    (1, TType.STRING, 'contraChave', None, None, ), # 1
    (2, TType.STRING, 'uuidInstalacao', None, None, ), # 2
    (3, TType.STRING, 'cpfOuCnpj', None, None, ), # 3
    (4, TType.STRING, 'nomeOuRazaoSocial', None, None, ), # 4
    (5, TType.STRING, 'fone', None, None, ), # 5
    (6, TType.STRING, 'email', None, None, ), # 6
    (7, TType.STRING, 'versaoSistema', None, None, ), # 7
    (8, TType.STRING, 'nomeBancoDados', None, None, ), # 8
  )

  def __init__(self, contraChave=None, uuidInstalacao=None, cpfOuCnpj=None, nomeOuRazaoSocial=None, fone=None, email=None, versaoSistema=None, nomeBancoDados=None,):
    self.contraChave = contraChave
    self.uuidInstalacao = uuidInstalacao
    self.cpfOuCnpj = cpfOuCnpj
    self.nomeOuRazaoSocial = nomeOuRazaoSocial
    self.fone = fone
    self.email = email
    self.versaoSistema = versaoSistema
    self.nomeBancoDados = nomeBancoDados

  def read(self, iprot):
    if iprot.__class__ == TBinaryProtocol.TBinaryProtocolAccelerated and isinstance(iprot.trans, TTransport.CReadableTransport) and self.thrift_spec is not None and fastbinary is not None:
      fastbinary.decode_binary(self, iprot.trans, (self.__class__, self.thrift_spec))
      return
    iprot.readStructBegin()
    while True:
      (fname, ftype, fid) = iprot.readFieldBegin()
      if ftype == TType.STOP:
        break
      if fid == 1:
        if ftype == TType.STRING:
          self.contraChave = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 2:
        if ftype == TType.STRING:
          self.uuidInstalacao = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 3:
        if ftype == TType.STRING:
          self.cpfOuCnpj = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 4:
        if ftype == TType.STRING:
          self.nomeOuRazaoSocial = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 5:
        if ftype == TType.STRING:
          self.fone = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 6:
        if ftype == TType.STRING:
          self.email = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 7:
        if ftype == TType.STRING:
          self.versaoSistema = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 8:
        if ftype == TType.STRING:
          self.nomeBancoDados = iprot.readString();
        else:
          iprot.skip(ftype)
      else:
        iprot.skip(ftype)
      iprot.readFieldEnd()
    iprot.readStructEnd()

  def write(self, oprot):
    if oprot.__class__ == TBinaryProtocol.TBinaryProtocolAccelerated and self.thrift_spec is not None and fastbinary is not None:
      oprot.trans.write(fastbinary.encode_binary(self, (self.__class__, self.thrift_spec)))
      return
    oprot.writeStructBegin('DadoInstalacaoThrift')
    if self.contraChave is not None:
      oprot.writeFieldBegin('contraChave', TType.STRING, 1)
      oprot.writeString(self.contraChave)
      oprot.writeFieldEnd()
    if self.uuidInstalacao is not None:
      oprot.writeFieldBegin('uuidInstalacao', TType.STRING, 2)
      oprot.writeString(self.uuidInstalacao)
      oprot.writeFieldEnd()
    if self.cpfOuCnpj is not None:
      oprot.writeFieldBegin('cpfOuCnpj', TType.STRING, 3)
      oprot.writeString(self.cpfOuCnpj)
      oprot.writeFieldEnd()
    if self.nomeOuRazaoSocial is not None:
      oprot.writeFieldBegin('nomeOuRazaoSocial', TType.STRING, 4)
      oprot.writeString(self.nomeOuRazaoSocial)
      oprot.writeFieldEnd()
    if self.fone is not None:
      oprot.writeFieldBegin('fone', TType.STRING, 5)
      oprot.writeString(self.fone)
      oprot.writeFieldEnd()
    if self.email is not None:
      oprot.writeFieldBegin('email', TType.STRING, 6)
      oprot.writeString(self.email)
      oprot.writeFieldEnd()
    if self.versaoSistema is not None:
      oprot.writeFieldBegin('versaoSistema', TType.STRING, 7)
      oprot.writeString(self.versaoSistema)
      oprot.writeFieldEnd()
    if self.nomeBancoDados is not None:
      oprot.writeFieldBegin('nomeBancoDados', TType.STRING, 8)
      oprot.writeString(self.nomeBancoDados)
      oprot.writeFieldEnd()
    oprot.writeFieldStop()
    oprot.writeStructEnd()

  def validate(self):
    if self.contraChave is None:
      raise TProtocol.TProtocolException(message='Required field contraChave is unset!')
    if self.cpfOuCnpj is None:
      raise TProtocol.TProtocolException(message='Required field cpfOuCnpj is unset!')
    if self.nomeOuRazaoSocial is None:
      raise TProtocol.TProtocolException(message='Required field nomeOuRazaoSocial is unset!')
    return


  def __hash__(self):
    value = 17
    value = (value * 31) ^ hash(self.contraChave)
    value = (value * 31) ^ hash(self.uuidInstalacao)
    value = (value * 31) ^ hash(self.cpfOuCnpj)
    value = (value * 31) ^ hash(self.nomeOuRazaoSocial)
    value = (value * 31) ^ hash(self.fone)
    value = (value * 31) ^ hash(self.email)
    value = (value * 31) ^ hash(self.versaoSistema)
    value = (value * 31) ^ hash(self.nomeBancoDados)
    return value

  def __repr__(self):
    L = ['%s=%r' % (key, value)
      for key, value in self.__dict__.iteritems()]
    return '%s(%s)' % (self.__class__.__name__, ', '.join(L))

  def __eq__(self, other):
    return isinstance(other, self.__class__) and self.__dict__ == other.__dict__

  def __ne__(self, other):
    return not (self == other)

class DadoTransporteThrift:
  """
  Objeto que encapsula uma ficha serializada com TBinaryProtocol e alguns de seus dados de identificação

  Attributes:
   - uuidDadoSerializado: UUID do dado (identificador "universal" gerado na criação do item)
   - tipoDadoSerializado: Tipo/classe do objeto serializado através do TBinaryProtocol.
   - cnesDadoSerializado: Código CNES da unidade de saúde.
   - codIbge: Código IBGE do dado serializado
   - ineDadoSerializado: Código INE da equipe que gerou a ficha.
   - numLote: Numero do lote em {@link DadoTransporteThrift#originadora}
   - dadoSerializado: Ficha serializado através do TBinaryProtocol.
   - remetente: Identifica a instalação que enviou o dado
  @see DadoInstalacaoThrift
   - originadora: Identifica a instalação que cadastrou/digitou
  @see DadoInstalacaoThrift
   - versao: Versão da ficha
  @see VersaoThrift
  """

  thrift_spec = (
    None, # 0
    (1, TType.STRING, 'uuidDadoSerializado', None, None, ), # 1
    (2, TType.I64, 'tipoDadoSerializado', None, None, ), # 2
    (3, TType.STRING, 'cnesDadoSerializado', None, None, ), # 3
    (4, TType.STRING, 'codIbge', None, None, ), # 4
    (5, TType.STRING, 'ineDadoSerializado', None, None, ), # 5
    (6, TType.I64, 'numLote', None, None, ), # 6
    (7, TType.STRING, 'dadoSerializado', None, None, ), # 7
    (8, TType.STRUCT, 'remetente', (DadoInstalacaoThrift, DadoInstalacaoThrift.thrift_spec), None, ), # 8
    (9, TType.STRUCT, 'originadora', (DadoInstalacaoThrift, DadoInstalacaoThrift.thrift_spec), None, ), # 9
    (10, TType.STRUCT, 'versao', (VersaoThrift, VersaoThrift.thrift_spec), None, ), # 10
  )

  def __init__(self, uuidDadoSerializado=None, tipoDadoSerializado=None, cnesDadoSerializado=None, codIbge=None, ineDadoSerializado=None, numLote=None, dadoSerializado=None, remetente=None, originadora=None, versao=None,):
    self.uuidDadoSerializado = uuidDadoSerializado
    self.tipoDadoSerializado = tipoDadoSerializado
    self.cnesDadoSerializado = cnesDadoSerializado
    self.codIbge = codIbge
    self.ineDadoSerializado = ineDadoSerializado
    self.numLote = numLote
    self.dadoSerializado = dadoSerializado
    self.remetente = remetente
    self.originadora = originadora
    self.versao = versao

  def read(self, iprot):
    if iprot.__class__ == TBinaryProtocol.TBinaryProtocolAccelerated and isinstance(iprot.trans, TTransport.CReadableTransport) and self.thrift_spec is not None and fastbinary is not None:
      fastbinary.decode_binary(self, iprot.trans, (self.__class__, self.thrift_spec))
      return
    iprot.readStructBegin()
    while True:
      (fname, ftype, fid) = iprot.readFieldBegin()
      if ftype == TType.STOP:
        break
      if fid == 1:
        if ftype == TType.STRING:
          self.uuidDadoSerializado = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 2:
        if ftype == TType.I64:
          self.tipoDadoSerializado = iprot.readI64();
        else:
          iprot.skip(ftype)
      elif fid == 3:
        if ftype == TType.STRING:
          self.cnesDadoSerializado = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 4:
        if ftype == TType.STRING:
          self.codIbge = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 5:
        if ftype == TType.STRING:
          self.ineDadoSerializado = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 6:
        if ftype == TType.I64:
          self.numLote = iprot.readI64();
        else:
          iprot.skip(ftype)
      elif fid == 7:
        if ftype == TType.STRING:
          self.dadoSerializado = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 8:
        if ftype == TType.STRUCT:
          self.remetente = DadoInstalacaoThrift()
          self.remetente.read(iprot)
        else:
          iprot.skip(ftype)
      elif fid == 9:
        if ftype == TType.STRUCT:
          self.originadora = DadoInstalacaoThrift()
          self.originadora.read(iprot)
        else:
          iprot.skip(ftype)
      elif fid == 10:
        if ftype == TType.STRUCT:
          self.versao = VersaoThrift()
          self.versao.read(iprot)
        else:
          iprot.skip(ftype)
      else:
        iprot.skip(ftype)
      iprot.readFieldEnd()
    iprot.readStructEnd()

  def write(self, oprot):
    if oprot.__class__ == TBinaryProtocol.TBinaryProtocolAccelerated and self.thrift_spec is not None and fastbinary is not None:
      oprot.trans.write(fastbinary.encode_binary(self, (self.__class__, self.thrift_spec)))
      return
    oprot.writeStructBegin('DadoTransporteThrift')
    if self.uuidDadoSerializado is not None:
      oprot.writeFieldBegin('uuidDadoSerializado', TType.STRING, 1)
      oprot.writeString(self.uuidDadoSerializado)
      oprot.writeFieldEnd()
    if self.tipoDadoSerializado is not None:
      oprot.writeFieldBegin('tipoDadoSerializado', TType.I64, 2)
      oprot.writeI64(self.tipoDadoSerializado)
      oprot.writeFieldEnd()
    if self.cnesDadoSerializado is not None:
      oprot.writeFieldBegin('cnesDadoSerializado', TType.STRING, 3)
      oprot.writeString(self.cnesDadoSerializado)
      oprot.writeFieldEnd()
    if self.codIbge is not None:
      oprot.writeFieldBegin('codIbge', TType.STRING, 4)
      oprot.writeString(self.codIbge)
      oprot.writeFieldEnd()
    if self.ineDadoSerializado is not None:
      oprot.writeFieldBegin('ineDadoSerializado', TType.STRING, 5)
      oprot.writeString(self.ineDadoSerializado)
      oprot.writeFieldEnd()
    if self.numLote is not None:
      oprot.writeFieldBegin('numLote', TType.I64, 6)
      oprot.writeI64(self.numLote)
      oprot.writeFieldEnd()
    if self.dadoSerializado is not None:
      oprot.writeFieldBegin('dadoSerializado', TType.STRING, 7)
      oprot.writeString(self.dadoSerializado)
      oprot.writeFieldEnd()
    if self.remetente is not None:
      oprot.writeFieldBegin('remetente', TType.STRUCT, 8)
      self.remetente.write(oprot)
      oprot.writeFieldEnd()
    if self.originadora is not None:
      oprot.writeFieldBegin('originadora', TType.STRUCT, 9)
      self.originadora.write(oprot)
      oprot.writeFieldEnd()
    if self.versao is not None:
      oprot.writeFieldBegin('versao', TType.STRUCT, 10)
      self.versao.write(oprot)
      oprot.writeFieldEnd()
    oprot.writeFieldStop()
    oprot.writeStructEnd()

  def validate(self):
    if self.uuidDadoSerializado is None:
      raise TProtocol.TProtocolException(message='Required field uuidDadoSerializado is unset!')
    if self.tipoDadoSerializado is None:
      raise TProtocol.TProtocolException(message='Required field tipoDadoSerializado is unset!')
    if self.cnesDadoSerializado is None:
      raise TProtocol.TProtocolException(message='Required field cnesDadoSerializado is unset!')
    if self.dadoSerializado is None:
      raise TProtocol.TProtocolException(message='Required field dadoSerializado is unset!')
    if self.remetente is None:
      raise TProtocol.TProtocolException(message='Required field remetente is unset!')
    if self.originadora is None:
      raise TProtocol.TProtocolException(message='Required field originadora is unset!')
    return


  def __hash__(self):
    value = 17
    value = (value * 31) ^ hash(self.uuidDadoSerializado)
    value = (value * 31) ^ hash(self.tipoDadoSerializado)
    value = (value * 31) ^ hash(self.cnesDadoSerializado)
    value = (value * 31) ^ hash(self.codIbge)
    value = (value * 31) ^ hash(self.ineDadoSerializado)
    value = (value * 31) ^ hash(self.numLote)
    value = (value * 31) ^ hash(self.dadoSerializado)
    value = (value * 31) ^ hash(self.remetente)
    value = (value * 31) ^ hash(self.originadora)
    value = (value * 31) ^ hash(self.versao)
    return value

  def __repr__(self):
    L = ['%s=%r' % (key, value)
      for key, value in self.__dict__.iteritems()]
    return '%s(%s)' % (self.__class__.__name__, ', '.join(L))

  def __eq__(self, other):
    return isinstance(other, self.__class__) and self.__dict__ == other.__dict__

  def __ne__(self, other):
    return not (self == other)
