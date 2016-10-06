#
# Autogenerated by Thrift Compiler (0.9.2)
#
# DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
#
#  options string: py
#

from thrift.Thrift import TType, TMessageType, TException, TApplicationException
import br.gov.saude.esusab.ras.common.ttypes


from thrift.transport import TTransport
from thrift.protocol import TBinaryProtocol, TProtocol
try:
  from thrift.protocol import fastbinary
except:
  fastbinary = None



class FichaAvaliacaoElegibilidadeThrift:
  """
  Attributes:
   - uuidFicha
   - tpCdsOrigem
   - cnsCidadao
   - nomeCidadao
   - nomeSocialCidadao
   - dataNascimentoCidadao
   - sexoCidadao
   - racaCorCidadao
   - nomeMaeCidadao
   - desconheceNomeMae
   - codigoIbgeMunicipioNascimento
   - nacionalidadeCidadao
   - emailCidadao
   - numeroNisPisPasep
   - endereco
   - atencaoDomiciliarProcedencia
   - atencaoDomiciliarModalidade
   - condicoesAvaliadas
   - cid10Principal
   - cid10SecundarioUm
   - cid10SecundarioDois
   - conclusaoDestinoElegivel
   - conclusaoDestinoInelegivel
   - cuidadorCidadao
   - turno
   - headerTransport
   - nomePaiCidadao
   - desconheceNomePai
   - dtNaturalizacao
   - portariaNaturalizacao
   - dtEntradaBrasil
   - paisNascimento
   - etnia
   - cnsCuidador
  """

  thrift_spec = (
    None, # 0
    (1, TType.STRING, 'uuidFicha', None, None, ), # 1
    (2, TType.I32, 'tpCdsOrigem', None, None, ), # 2
    None, # 3
    (4, TType.STRING, 'cnsCidadao', None, None, ), # 4
    (5, TType.STRING, 'nomeCidadao', None, None, ), # 5
    (6, TType.STRING, 'nomeSocialCidadao', None, None, ), # 6
    (7, TType.I64, 'dataNascimentoCidadao', None, None, ), # 7
    (8, TType.I64, 'sexoCidadao', None, None, ), # 8
    (9, TType.I64, 'racaCorCidadao', None, None, ), # 9
    (10, TType.STRING, 'nomeMaeCidadao', None, None, ), # 10
    (11, TType.BOOL, 'desconheceNomeMae', None, None, ), # 11
    (12, TType.STRING, 'codigoIbgeMunicipioNascimento', None, None, ), # 12
    (13, TType.I64, 'nacionalidadeCidadao', None, None, ), # 13
    (14, TType.STRING, 'emailCidadao', None, None, ), # 14
    (15, TType.STRING, 'numeroNisPisPasep', None, None, ), # 15
    (16, TType.STRUCT, 'endereco', (br.gov.saude.esusab.ras.common.ttypes.EnderecoLocalPermanenciaThrift, br.gov.saude.esusab.ras.common.ttypes.EnderecoLocalPermanenciaThrift.thrift_spec), None, ), # 16
    (17, TType.I64, 'atencaoDomiciliarProcedencia', None, None, ), # 17
    (18, TType.I64, 'atencaoDomiciliarModalidade', None, None, ), # 18
    (19, TType.LIST, 'condicoesAvaliadas', (TType.I64,None), None, ), # 19
    (20, TType.STRING, 'cid10Principal', None, None, ), # 20
    (21, TType.STRING, 'cid10SecundarioUm', None, None, ), # 21
    (22, TType.STRING, 'cid10SecundarioDois', None, None, ), # 22
    (23, TType.I64, 'conclusaoDestinoElegivel', None, None, ), # 23
    (24, TType.LIST, 'conclusaoDestinoInelegivel', (TType.I64,None), None, ), # 24
    (25, TType.I64, 'cuidadorCidadao', None, None, ), # 25
    (26, TType.I64, 'turno', None, None, ), # 26
    (27, TType.STRUCT, 'headerTransport', (br.gov.saude.esusab.ras.common.ttypes.VariasLotacoesHeaderThrift, br.gov.saude.esusab.ras.common.ttypes.VariasLotacoesHeaderThrift.thrift_spec), None, ), # 27
    (28, TType.STRING, 'nomePaiCidadao', None, None, ), # 28
    (29, TType.BOOL, 'desconheceNomePai', None, None, ), # 29
    (30, TType.I64, 'dtNaturalizacao', None, None, ), # 30
    (31, TType.STRING, 'portariaNaturalizacao', None, None, ), # 31
    (32, TType.I64, 'dtEntradaBrasil', None, None, ), # 32
    (33, TType.I64, 'paisNascimento', None, None, ), # 33
    (34, TType.I64, 'etnia', None, None, ), # 34
    (35, TType.STRING, 'cnsCuidador', None, None, ), # 35
  )

  def __init__(self, uuidFicha=None, tpCdsOrigem=None, cnsCidadao=None, nomeCidadao=None, nomeSocialCidadao=None, dataNascimentoCidadao=None, sexoCidadao=None, racaCorCidadao=None, nomeMaeCidadao=None, desconheceNomeMae=None, codigoIbgeMunicipioNascimento=None, nacionalidadeCidadao=None, emailCidadao=None, numeroNisPisPasep=None, endereco=None, atencaoDomiciliarProcedencia=None, atencaoDomiciliarModalidade=None, condicoesAvaliadas=None, cid10Principal=None, cid10SecundarioUm=None, cid10SecundarioDois=None, conclusaoDestinoElegivel=None, conclusaoDestinoInelegivel=None, cuidadorCidadao=None, turno=None, headerTransport=None, nomePaiCidadao=None, desconheceNomePai=None, dtNaturalizacao=None, portariaNaturalizacao=None, dtEntradaBrasil=None, paisNascimento=None, etnia=None, cnsCuidador=None,):
    self.uuidFicha = uuidFicha
    self.tpCdsOrigem = tpCdsOrigem
    self.cnsCidadao = cnsCidadao
    self.nomeCidadao = nomeCidadao
    self.nomeSocialCidadao = nomeSocialCidadao
    self.dataNascimentoCidadao = dataNascimentoCidadao
    self.sexoCidadao = sexoCidadao
    self.racaCorCidadao = racaCorCidadao
    self.nomeMaeCidadao = nomeMaeCidadao
    self.desconheceNomeMae = desconheceNomeMae
    self.codigoIbgeMunicipioNascimento = codigoIbgeMunicipioNascimento
    self.nacionalidadeCidadao = nacionalidadeCidadao
    self.emailCidadao = emailCidadao
    self.numeroNisPisPasep = numeroNisPisPasep
    self.endereco = endereco
    self.atencaoDomiciliarProcedencia = atencaoDomiciliarProcedencia
    self.atencaoDomiciliarModalidade = atencaoDomiciliarModalidade
    self.condicoesAvaliadas = condicoesAvaliadas
    self.cid10Principal = cid10Principal
    self.cid10SecundarioUm = cid10SecundarioUm
    self.cid10SecundarioDois = cid10SecundarioDois
    self.conclusaoDestinoElegivel = conclusaoDestinoElegivel
    self.conclusaoDestinoInelegivel = conclusaoDestinoInelegivel
    self.cuidadorCidadao = cuidadorCidadao
    self.turno = turno
    self.headerTransport = headerTransport
    self.nomePaiCidadao = nomePaiCidadao
    self.desconheceNomePai = desconheceNomePai
    self.dtNaturalizacao = dtNaturalizacao
    self.portariaNaturalizacao = portariaNaturalizacao
    self.dtEntradaBrasil = dtEntradaBrasil
    self.paisNascimento = paisNascimento
    self.etnia = etnia
    self.cnsCuidador = cnsCuidador

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
          self.uuidFicha = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 2:
        if ftype == TType.I32:
          self.tpCdsOrigem = iprot.readI32();
        else:
          iprot.skip(ftype)
      elif fid == 4:
        if ftype == TType.STRING:
          self.cnsCidadao = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 5:
        if ftype == TType.STRING:
          self.nomeCidadao = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 6:
        if ftype == TType.STRING:
          self.nomeSocialCidadao = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 7:
        if ftype == TType.I64:
          self.dataNascimentoCidadao = iprot.readI64();
        else:
          iprot.skip(ftype)
      elif fid == 8:
        if ftype == TType.I64:
          self.sexoCidadao = iprot.readI64();
        else:
          iprot.skip(ftype)
      elif fid == 9:
        if ftype == TType.I64:
          self.racaCorCidadao = iprot.readI64();
        else:
          iprot.skip(ftype)
      elif fid == 10:
        if ftype == TType.STRING:
          self.nomeMaeCidadao = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 11:
        if ftype == TType.BOOL:
          self.desconheceNomeMae = iprot.readBool();
        else:
          iprot.skip(ftype)
      elif fid == 12:
        if ftype == TType.STRING:
          self.codigoIbgeMunicipioNascimento = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 13:
        if ftype == TType.I64:
          self.nacionalidadeCidadao = iprot.readI64();
        else:
          iprot.skip(ftype)
      elif fid == 14:
        if ftype == TType.STRING:
          self.emailCidadao = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 15:
        if ftype == TType.STRING:
          self.numeroNisPisPasep = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 16:
        if ftype == TType.STRUCT:
          self.endereco = br.gov.saude.esusab.ras.common.ttypes.EnderecoLocalPermanenciaThrift()
          self.endereco.read(iprot)
        else:
          iprot.skip(ftype)
      elif fid == 17:
        if ftype == TType.I64:
          self.atencaoDomiciliarProcedencia = iprot.readI64();
        else:
          iprot.skip(ftype)
      elif fid == 18:
        if ftype == TType.I64:
          self.atencaoDomiciliarModalidade = iprot.readI64();
        else:
          iprot.skip(ftype)
      elif fid == 19:
        if ftype == TType.LIST:
          self.condicoesAvaliadas = []
          (_etype3, _size0) = iprot.readListBegin()
          for _i4 in xrange(_size0):
            _elem5 = iprot.readI64();
            self.condicoesAvaliadas.append(_elem5)
          iprot.readListEnd()
        else:
          iprot.skip(ftype)
      elif fid == 20:
        if ftype == TType.STRING:
          self.cid10Principal = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 21:
        if ftype == TType.STRING:
          self.cid10SecundarioUm = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 22:
        if ftype == TType.STRING:
          self.cid10SecundarioDois = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 23:
        if ftype == TType.I64:
          self.conclusaoDestinoElegivel = iprot.readI64();
        else:
          iprot.skip(ftype)
      elif fid == 24:
        if ftype == TType.LIST:
          self.conclusaoDestinoInelegivel = []
          (_etype9, _size6) = iprot.readListBegin()
          for _i10 in xrange(_size6):
            _elem11 = iprot.readI64();
            self.conclusaoDestinoInelegivel.append(_elem11)
          iprot.readListEnd()
        else:
          iprot.skip(ftype)
      elif fid == 25:
        if ftype == TType.I64:
          self.cuidadorCidadao = iprot.readI64();
        else:
          iprot.skip(ftype)
      elif fid == 26:
        if ftype == TType.I64:
          self.turno = iprot.readI64();
        else:
          iprot.skip(ftype)
      elif fid == 27:
        if ftype == TType.STRUCT:
          self.headerTransport = br.gov.saude.esusab.ras.common.ttypes.VariasLotacoesHeaderThrift()
          self.headerTransport.read(iprot)
        else:
          iprot.skip(ftype)
      elif fid == 28:
        if ftype == TType.STRING:
          self.nomePaiCidadao = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 29:
        if ftype == TType.BOOL:
          self.desconheceNomePai = iprot.readBool();
        else:
          iprot.skip(ftype)
      elif fid == 30:
        if ftype == TType.I64:
          self.dtNaturalizacao = iprot.readI64();
        else:
          iprot.skip(ftype)
      elif fid == 31:
        if ftype == TType.STRING:
          self.portariaNaturalizacao = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 32:
        if ftype == TType.I64:
          self.dtEntradaBrasil = iprot.readI64();
        else:
          iprot.skip(ftype)
      elif fid == 33:
        if ftype == TType.I64:
          self.paisNascimento = iprot.readI64();
        else:
          iprot.skip(ftype)
      elif fid == 34:
        if ftype == TType.I64:
          self.etnia = iprot.readI64();
        else:
          iprot.skip(ftype)
      elif fid == 35:
        if ftype == TType.STRING:
          self.cnsCuidador = iprot.readString();
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
    oprot.writeStructBegin('FichaAvaliacaoElegibilidadeThrift')
    if self.uuidFicha is not None:
      oprot.writeFieldBegin('uuidFicha', TType.STRING, 1)
      oprot.writeString(self.uuidFicha)
      oprot.writeFieldEnd()
    if self.tpCdsOrigem is not None:
      oprot.writeFieldBegin('tpCdsOrigem', TType.I32, 2)
      oprot.writeI32(self.tpCdsOrigem)
      oprot.writeFieldEnd()
    if self.cnsCidadao is not None:
      oprot.writeFieldBegin('cnsCidadao', TType.STRING, 4)
      oprot.writeString(self.cnsCidadao)
      oprot.writeFieldEnd()
    if self.nomeCidadao is not None:
      oprot.writeFieldBegin('nomeCidadao', TType.STRING, 5)
      oprot.writeString(self.nomeCidadao)
      oprot.writeFieldEnd()
    if self.nomeSocialCidadao is not None:
      oprot.writeFieldBegin('nomeSocialCidadao', TType.STRING, 6)
      oprot.writeString(self.nomeSocialCidadao)
      oprot.writeFieldEnd()
    if self.dataNascimentoCidadao is not None:
      oprot.writeFieldBegin('dataNascimentoCidadao', TType.I64, 7)
      oprot.writeI64(self.dataNascimentoCidadao)
      oprot.writeFieldEnd()
    if self.sexoCidadao is not None:
      oprot.writeFieldBegin('sexoCidadao', TType.I64, 8)
      oprot.writeI64(self.sexoCidadao)
      oprot.writeFieldEnd()
    if self.racaCorCidadao is not None:
      oprot.writeFieldBegin('racaCorCidadao', TType.I64, 9)
      oprot.writeI64(self.racaCorCidadao)
      oprot.writeFieldEnd()
    if self.nomeMaeCidadao is not None:
      oprot.writeFieldBegin('nomeMaeCidadao', TType.STRING, 10)
      oprot.writeString(self.nomeMaeCidadao)
      oprot.writeFieldEnd()
    if self.desconheceNomeMae is not None:
      oprot.writeFieldBegin('desconheceNomeMae', TType.BOOL, 11)
      oprot.writeBool(self.desconheceNomeMae)
      oprot.writeFieldEnd()
    if self.codigoIbgeMunicipioNascimento is not None:
      oprot.writeFieldBegin('codigoIbgeMunicipioNascimento', TType.STRING, 12)
      oprot.writeString(self.codigoIbgeMunicipioNascimento)
      oprot.writeFieldEnd()
    if self.nacionalidadeCidadao is not None:
      oprot.writeFieldBegin('nacionalidadeCidadao', TType.I64, 13)
      oprot.writeI64(self.nacionalidadeCidadao)
      oprot.writeFieldEnd()
    if self.emailCidadao is not None:
      oprot.writeFieldBegin('emailCidadao', TType.STRING, 14)
      oprot.writeString(self.emailCidadao)
      oprot.writeFieldEnd()
    if self.numeroNisPisPasep is not None:
      oprot.writeFieldBegin('numeroNisPisPasep', TType.STRING, 15)
      oprot.writeString(self.numeroNisPisPasep)
      oprot.writeFieldEnd()
    if self.endereco is not None:
      oprot.writeFieldBegin('endereco', TType.STRUCT, 16)
      self.endereco.write(oprot)
      oprot.writeFieldEnd()
    if self.atencaoDomiciliarProcedencia is not None:
      oprot.writeFieldBegin('atencaoDomiciliarProcedencia', TType.I64, 17)
      oprot.writeI64(self.atencaoDomiciliarProcedencia)
      oprot.writeFieldEnd()
    if self.atencaoDomiciliarModalidade is not None:
      oprot.writeFieldBegin('atencaoDomiciliarModalidade', TType.I64, 18)
      oprot.writeI64(self.atencaoDomiciliarModalidade)
      oprot.writeFieldEnd()
    if self.condicoesAvaliadas is not None:
      oprot.writeFieldBegin('condicoesAvaliadas', TType.LIST, 19)
      oprot.writeListBegin(TType.I64, len(self.condicoesAvaliadas))
      for iter12 in self.condicoesAvaliadas:
        oprot.writeI64(iter12)
      oprot.writeListEnd()
      oprot.writeFieldEnd()
    if self.cid10Principal is not None:
      oprot.writeFieldBegin('cid10Principal', TType.STRING, 20)
      oprot.writeString(self.cid10Principal)
      oprot.writeFieldEnd()
    if self.cid10SecundarioUm is not None:
      oprot.writeFieldBegin('cid10SecundarioUm', TType.STRING, 21)
      oprot.writeString(self.cid10SecundarioUm)
      oprot.writeFieldEnd()
    if self.cid10SecundarioDois is not None:
      oprot.writeFieldBegin('cid10SecundarioDois', TType.STRING, 22)
      oprot.writeString(self.cid10SecundarioDois)
      oprot.writeFieldEnd()
    if self.conclusaoDestinoElegivel is not None:
      oprot.writeFieldBegin('conclusaoDestinoElegivel', TType.I64, 23)
      oprot.writeI64(self.conclusaoDestinoElegivel)
      oprot.writeFieldEnd()
    if self.conclusaoDestinoInelegivel is not None:
      oprot.writeFieldBegin('conclusaoDestinoInelegivel', TType.LIST, 24)
      oprot.writeListBegin(TType.I64, len(self.conclusaoDestinoInelegivel))
      for iter13 in self.conclusaoDestinoInelegivel:
        oprot.writeI64(iter13)
      oprot.writeListEnd()
      oprot.writeFieldEnd()
    if self.cuidadorCidadao is not None:
      oprot.writeFieldBegin('cuidadorCidadao', TType.I64, 25)
      oprot.writeI64(self.cuidadorCidadao)
      oprot.writeFieldEnd()
    if self.turno is not None:
      oprot.writeFieldBegin('turno', TType.I64, 26)
      oprot.writeI64(self.turno)
      oprot.writeFieldEnd()
    if self.headerTransport is not None:
      oprot.writeFieldBegin('headerTransport', TType.STRUCT, 27)
      self.headerTransport.write(oprot)
      oprot.writeFieldEnd()
    if self.nomePaiCidadao is not None:
      oprot.writeFieldBegin('nomePaiCidadao', TType.STRING, 28)
      oprot.writeString(self.nomePaiCidadao)
      oprot.writeFieldEnd()
    if self.desconheceNomePai is not None:
      oprot.writeFieldBegin('desconheceNomePai', TType.BOOL, 29)
      oprot.writeBool(self.desconheceNomePai)
      oprot.writeFieldEnd()
    if self.dtNaturalizacao is not None:
      oprot.writeFieldBegin('dtNaturalizacao', TType.I64, 30)
      oprot.writeI64(self.dtNaturalizacao)
      oprot.writeFieldEnd()
    if self.portariaNaturalizacao is not None:
      oprot.writeFieldBegin('portariaNaturalizacao', TType.STRING, 31)
      oprot.writeString(self.portariaNaturalizacao)
      oprot.writeFieldEnd()
    if self.dtEntradaBrasil is not None:
      oprot.writeFieldBegin('dtEntradaBrasil', TType.I64, 32)
      oprot.writeI64(self.dtEntradaBrasil)
      oprot.writeFieldEnd()
    if self.paisNascimento is not None:
      oprot.writeFieldBegin('paisNascimento', TType.I64, 33)
      oprot.writeI64(self.paisNascimento)
      oprot.writeFieldEnd()
    if self.etnia is not None:
      oprot.writeFieldBegin('etnia', TType.I64, 34)
      oprot.writeI64(self.etnia)
      oprot.writeFieldEnd()
    if self.cnsCuidador is not None:
      oprot.writeFieldBegin('cnsCuidador', TType.STRING, 35)
      oprot.writeString(self.cnsCuidador)
      oprot.writeFieldEnd()
    oprot.writeFieldStop()
    oprot.writeStructEnd()

  def validate(self):
    if self.uuidFicha is None:
      raise TProtocol.TProtocolException(message='Required field uuidFicha is unset!')
    return


  def __hash__(self):
    value = 17
    value = (value * 31) ^ hash(self.uuidFicha)
    value = (value * 31) ^ hash(self.tpCdsOrigem)
    value = (value * 31) ^ hash(self.cnsCidadao)
    value = (value * 31) ^ hash(self.nomeCidadao)
    value = (value * 31) ^ hash(self.nomeSocialCidadao)
    value = (value * 31) ^ hash(self.dataNascimentoCidadao)
    value = (value * 31) ^ hash(self.sexoCidadao)
    value = (value * 31) ^ hash(self.racaCorCidadao)
    value = (value * 31) ^ hash(self.nomeMaeCidadao)
    value = (value * 31) ^ hash(self.desconheceNomeMae)
    value = (value * 31) ^ hash(self.codigoIbgeMunicipioNascimento)
    value = (value * 31) ^ hash(self.nacionalidadeCidadao)
    value = (value * 31) ^ hash(self.emailCidadao)
    value = (value * 31) ^ hash(self.numeroNisPisPasep)
    value = (value * 31) ^ hash(self.endereco)
    value = (value * 31) ^ hash(self.atencaoDomiciliarProcedencia)
    value = (value * 31) ^ hash(self.atencaoDomiciliarModalidade)
    value = (value * 31) ^ hash(self.condicoesAvaliadas)
    value = (value * 31) ^ hash(self.cid10Principal)
    value = (value * 31) ^ hash(self.cid10SecundarioUm)
    value = (value * 31) ^ hash(self.cid10SecundarioDois)
    value = (value * 31) ^ hash(self.conclusaoDestinoElegivel)
    value = (value * 31) ^ hash(self.conclusaoDestinoInelegivel)
    value = (value * 31) ^ hash(self.cuidadorCidadao)
    value = (value * 31) ^ hash(self.turno)
    value = (value * 31) ^ hash(self.headerTransport)
    value = (value * 31) ^ hash(self.nomePaiCidadao)
    value = (value * 31) ^ hash(self.desconheceNomePai)
    value = (value * 31) ^ hash(self.dtNaturalizacao)
    value = (value * 31) ^ hash(self.portariaNaturalizacao)
    value = (value * 31) ^ hash(self.dtEntradaBrasil)
    value = (value * 31) ^ hash(self.paisNascimento)
    value = (value * 31) ^ hash(self.etnia)
    value = (value * 31) ^ hash(self.cnsCuidador)
    return value

  def __repr__(self):
    L = ['%s=%r' % (key, value)
      for key, value in self.__dict__.iteritems()]
    return '%s(%s)' % (self.__class__.__name__, ', '.join(L))

  def __eq__(self, other):
    return isinstance(other, self.__class__) and self.__dict__ == other.__dict__

  def __ne__(self, other):
    return not (self == other)
