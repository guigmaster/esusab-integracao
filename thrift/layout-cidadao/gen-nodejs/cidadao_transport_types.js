//
// Autogenerated by Thrift Compiler (0.9.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;

var ttypes = module.exports = {};
ttypes.SexoThrift = {
'MASCULINO' : 0,
'FEMININO' : 1,
'AMBOS' : 2,
'NAO_INFORMADO' : 3
};
ttypes.TipoSanguineoThrift = {
'A_POSITIVO' : 0,
'A_NEGATIVO' : 1,
'B_POSITIVO' : 2,
'B_NEGATIVO' : 3,
'AB_POSITIVO' : 4,
'AB_NEGATIVO' : 5,
'O_POSITIVO' : 6,
'O_NEGATIVO' : 7
};
EnderecoTransportThrift = module.exports.EnderecoTransportThrift = function(args) {
  this.bairroNome = null;
  this.bairroDne = null;
  this.localidadeCep = null;
  this.localidadeDne = null;
  this.localidadeIbge = null;
  this.complemento = null;
  this.logradouro = null;
  this.logradouroDne = null;
  this.numero = null;
  this.pontoReferencia = null;
  this.semNumero = null;
  this.ufSigla = null;
  this.area = null;
  this.microArea = null;
  if (args) {
    if (args.bairroNome !== undefined) {
      this.bairroNome = args.bairroNome;
    }
    if (args.bairroDne !== undefined) {
      this.bairroDne = args.bairroDne;
    }
    if (args.localidadeCep !== undefined) {
      this.localidadeCep = args.localidadeCep;
    }
    if (args.localidadeDne !== undefined) {
      this.localidadeDne = args.localidadeDne;
    }
    if (args.localidadeIbge !== undefined) {
      this.localidadeIbge = args.localidadeIbge;
    }
    if (args.complemento !== undefined) {
      this.complemento = args.complemento;
    }
    if (args.logradouro !== undefined) {
      this.logradouro = args.logradouro;
    }
    if (args.logradouroDne !== undefined) {
      this.logradouroDne = args.logradouroDne;
    }
    if (args.numero !== undefined) {
      this.numero = args.numero;
    }
    if (args.pontoReferencia !== undefined) {
      this.pontoReferencia = args.pontoReferencia;
    }
    if (args.semNumero !== undefined) {
      this.semNumero = args.semNumero;
    }
    if (args.ufSigla !== undefined) {
      this.ufSigla = args.ufSigla;
    }
    if (args.area !== undefined) {
      this.area = args.area;
    }
    if (args.microArea !== undefined) {
      this.microArea = args.microArea;
    }
  }
};
EnderecoTransportThrift.prototype = {};
EnderecoTransportThrift.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.bairroNome = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.bairroDne = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.localidadeCep = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.localidadeDne = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.localidadeIbge = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.complemento = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.logradouro = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRING) {
        this.logradouroDne = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.STRING) {
        this.numero = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this.pontoReferencia = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.BOOL) {
        this.semNumero = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.STRING) {
        this.ufSigla = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.STRING) {
        this.area = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.STRING) {
        this.microArea = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

EnderecoTransportThrift.prototype.write = function(output) {
  output.writeStructBegin('EnderecoTransportThrift');
  if (this.bairroNome !== null && this.bairroNome !== undefined) {
    output.writeFieldBegin('bairroNome', Thrift.Type.STRING, 1);
    output.writeString(this.bairroNome);
    output.writeFieldEnd();
  }
  if (this.bairroDne !== null && this.bairroDne !== undefined) {
    output.writeFieldBegin('bairroDne', Thrift.Type.STRING, 2);
    output.writeString(this.bairroDne);
    output.writeFieldEnd();
  }
  if (this.localidadeCep !== null && this.localidadeCep !== undefined) {
    output.writeFieldBegin('localidadeCep', Thrift.Type.STRING, 3);
    output.writeString(this.localidadeCep);
    output.writeFieldEnd();
  }
  if (this.localidadeDne !== null && this.localidadeDne !== undefined) {
    output.writeFieldBegin('localidadeDne', Thrift.Type.STRING, 4);
    output.writeString(this.localidadeDne);
    output.writeFieldEnd();
  }
  if (this.localidadeIbge !== null && this.localidadeIbge !== undefined) {
    output.writeFieldBegin('localidadeIbge', Thrift.Type.STRING, 5);
    output.writeString(this.localidadeIbge);
    output.writeFieldEnd();
  }
  if (this.complemento !== null && this.complemento !== undefined) {
    output.writeFieldBegin('complemento', Thrift.Type.STRING, 6);
    output.writeString(this.complemento);
    output.writeFieldEnd();
  }
  if (this.logradouro !== null && this.logradouro !== undefined) {
    output.writeFieldBegin('logradouro', Thrift.Type.STRING, 7);
    output.writeString(this.logradouro);
    output.writeFieldEnd();
  }
  if (this.logradouroDne !== null && this.logradouroDne !== undefined) {
    output.writeFieldBegin('logradouroDne', Thrift.Type.STRING, 8);
    output.writeString(this.logradouroDne);
    output.writeFieldEnd();
  }
  if (this.numero !== null && this.numero !== undefined) {
    output.writeFieldBegin('numero', Thrift.Type.STRING, 9);
    output.writeString(this.numero);
    output.writeFieldEnd();
  }
  if (this.pontoReferencia !== null && this.pontoReferencia !== undefined) {
    output.writeFieldBegin('pontoReferencia', Thrift.Type.STRING, 10);
    output.writeString(this.pontoReferencia);
    output.writeFieldEnd();
  }
  if (this.semNumero !== null && this.semNumero !== undefined) {
    output.writeFieldBegin('semNumero', Thrift.Type.BOOL, 11);
    output.writeBool(this.semNumero);
    output.writeFieldEnd();
  }
  if (this.ufSigla !== null && this.ufSigla !== undefined) {
    output.writeFieldBegin('ufSigla', Thrift.Type.STRING, 12);
    output.writeString(this.ufSigla);
    output.writeFieldEnd();
  }
  if (this.area !== null && this.area !== undefined) {
    output.writeFieldBegin('area', Thrift.Type.STRING, 13);
    output.writeString(this.area);
    output.writeFieldEnd();
  }
  if (this.microArea !== null && this.microArea !== undefined) {
    output.writeFieldBegin('microArea', Thrift.Type.STRING, 14);
    output.writeString(this.microArea);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CidadaoTransportThrift = module.exports.CidadaoTransportThrift = function(args) {
  this.naoPossuiCns = null;
  this.cns = null;
  this.cpf = null;
  this.dataNascimento = null;
  this.desconheceNomeMae = null;
  this.nomeMae = null;
  this.email = null;
  this.endereco = null;
  this.escolaridadeId = null;
  this.estadoCivilId = null;
  this.estrangeiro = null;
  this.etniaId = null;
  this.faleceu = null;
  this.municipioNascimentoCep = null;
  this.municipioNascimentoDne = null;
  this.municipioNascimentoIbge = null;
  this.nisPisPasep = null;
  this.nomeCompleto = null;
  this.nomeSocial = null;
  this.numeroProntuario = null;
  this.numeroProntuarioCnes = null;
  this.racaCorId = null;
  this.sexo = null;
  this.telefoneCelular = null;
  this.telefoneContato = null;
  this.telefoneResidencial = null;
  this.tipoSanguineo = null;
  this.cboNumero = null;
  if (args) {
    if (args.naoPossuiCns !== undefined) {
      this.naoPossuiCns = args.naoPossuiCns;
    }
    if (args.cns !== undefined) {
      this.cns = args.cns;
    }
    if (args.cpf !== undefined) {
      this.cpf = args.cpf;
    }
    if (args.dataNascimento !== undefined) {
      this.dataNascimento = args.dataNascimento;
    }
    if (args.desconheceNomeMae !== undefined) {
      this.desconheceNomeMae = args.desconheceNomeMae;
    }
    if (args.nomeMae !== undefined) {
      this.nomeMae = args.nomeMae;
    }
    if (args.email !== undefined) {
      this.email = args.email;
    }
    if (args.endereco !== undefined) {
      this.endereco = args.endereco;
    }
    if (args.escolaridadeId !== undefined) {
      this.escolaridadeId = args.escolaridadeId;
    }
    if (args.estadoCivilId !== undefined) {
      this.estadoCivilId = args.estadoCivilId;
    }
    if (args.estrangeiro !== undefined) {
      this.estrangeiro = args.estrangeiro;
    }
    if (args.etniaId !== undefined) {
      this.etniaId = args.etniaId;
    }
    if (args.faleceu !== undefined) {
      this.faleceu = args.faleceu;
    }
    if (args.municipioNascimentoCep !== undefined) {
      this.municipioNascimentoCep = args.municipioNascimentoCep;
    }
    if (args.municipioNascimentoDne !== undefined) {
      this.municipioNascimentoDne = args.municipioNascimentoDne;
    }
    if (args.municipioNascimentoIbge !== undefined) {
      this.municipioNascimentoIbge = args.municipioNascimentoIbge;
    }
    if (args.nisPisPasep !== undefined) {
      this.nisPisPasep = args.nisPisPasep;
    }
    if (args.nomeCompleto !== undefined) {
      this.nomeCompleto = args.nomeCompleto;
    }
    if (args.nomeSocial !== undefined) {
      this.nomeSocial = args.nomeSocial;
    }
    if (args.numeroProntuario !== undefined) {
      this.numeroProntuario = args.numeroProntuario;
    }
    if (args.numeroProntuarioCnes !== undefined) {
      this.numeroProntuarioCnes = args.numeroProntuarioCnes;
    }
    if (args.racaCorId !== undefined) {
      this.racaCorId = args.racaCorId;
    }
    if (args.sexo !== undefined) {
      this.sexo = args.sexo;
    }
    if (args.telefoneCelular !== undefined) {
      this.telefoneCelular = args.telefoneCelular;
    }
    if (args.telefoneContato !== undefined) {
      this.telefoneContato = args.telefoneContato;
    }
    if (args.telefoneResidencial !== undefined) {
      this.telefoneResidencial = args.telefoneResidencial;
    }
    if (args.tipoSanguineo !== undefined) {
      this.tipoSanguineo = args.tipoSanguineo;
    }
    if (args.cboNumero !== undefined) {
      this.cboNumero = args.cboNumero;
    }
  }
};
CidadaoTransportThrift.prototype = {};
CidadaoTransportThrift.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.naoPossuiCns = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.cns = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.cpf = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I64) {
        this.dataNascimento = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.BOOL) {
        this.desconheceNomeMae = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.nomeMae = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.email = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRUCT) {
        this.endereco = new ttypes.EnderecoTransportThrift();
        this.endereco.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.I64) {
        this.escolaridadeId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.I64) {
        this.estadoCivilId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.BOOL) {
        this.estrangeiro = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.I64) {
        this.etniaId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.BOOL) {
        this.faleceu = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.STRING) {
        this.municipioNascimentoCep = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 15:
      if (ftype == Thrift.Type.STRING) {
        this.municipioNascimentoDne = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 16:
      if (ftype == Thrift.Type.STRING) {
        this.municipioNascimentoIbge = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 17:
      if (ftype == Thrift.Type.STRING) {
        this.nisPisPasep = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 18:
      if (ftype == Thrift.Type.STRING) {
        this.nomeCompleto = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 19:
      if (ftype == Thrift.Type.STRING) {
        this.nomeSocial = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 20:
      if (ftype == Thrift.Type.STRING) {
        this.numeroProntuario = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 22:
      if (ftype == Thrift.Type.STRING) {
        this.numeroProntuarioCnes = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 23:
      if (ftype == Thrift.Type.I64) {
        this.racaCorId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 24:
      if (ftype == Thrift.Type.I32) {
        this.sexo = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 25:
      if (ftype == Thrift.Type.STRING) {
        this.telefoneCelular = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 26:
      if (ftype == Thrift.Type.STRING) {
        this.telefoneContato = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 27:
      if (ftype == Thrift.Type.STRING) {
        this.telefoneResidencial = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 28:
      if (ftype == Thrift.Type.I32) {
        this.tipoSanguineo = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 29:
      if (ftype == Thrift.Type.STRING) {
        this.cboNumero = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CidadaoTransportThrift.prototype.write = function(output) {
  output.writeStructBegin('CidadaoTransportThrift');
  if (this.naoPossuiCns !== null && this.naoPossuiCns !== undefined) {
    output.writeFieldBegin('naoPossuiCns', Thrift.Type.BOOL, 1);
    output.writeBool(this.naoPossuiCns);
    output.writeFieldEnd();
  }
  if (this.cns !== null && this.cns !== undefined) {
    output.writeFieldBegin('cns', Thrift.Type.STRING, 2);
    output.writeString(this.cns);
    output.writeFieldEnd();
  }
  if (this.cpf !== null && this.cpf !== undefined) {
    output.writeFieldBegin('cpf', Thrift.Type.STRING, 3);
    output.writeString(this.cpf);
    output.writeFieldEnd();
  }
  if (this.dataNascimento !== null && this.dataNascimento !== undefined) {
    output.writeFieldBegin('dataNascimento', Thrift.Type.I64, 4);
    output.writeI64(this.dataNascimento);
    output.writeFieldEnd();
  }
  if (this.desconheceNomeMae !== null && this.desconheceNomeMae !== undefined) {
    output.writeFieldBegin('desconheceNomeMae', Thrift.Type.BOOL, 5);
    output.writeBool(this.desconheceNomeMae);
    output.writeFieldEnd();
  }
  if (this.nomeMae !== null && this.nomeMae !== undefined) {
    output.writeFieldBegin('nomeMae', Thrift.Type.STRING, 6);
    output.writeString(this.nomeMae);
    output.writeFieldEnd();
  }
  if (this.email !== null && this.email !== undefined) {
    output.writeFieldBegin('email', Thrift.Type.STRING, 7);
    output.writeString(this.email);
    output.writeFieldEnd();
  }
  if (this.endereco !== null && this.endereco !== undefined) {
    output.writeFieldBegin('endereco', Thrift.Type.STRUCT, 8);
    this.endereco.write(output);
    output.writeFieldEnd();
  }
  if (this.escolaridadeId !== null && this.escolaridadeId !== undefined) {
    output.writeFieldBegin('escolaridadeId', Thrift.Type.I64, 9);
    output.writeI64(this.escolaridadeId);
    output.writeFieldEnd();
  }
  if (this.estadoCivilId !== null && this.estadoCivilId !== undefined) {
    output.writeFieldBegin('estadoCivilId', Thrift.Type.I64, 10);
    output.writeI64(this.estadoCivilId);
    output.writeFieldEnd();
  }
  if (this.estrangeiro !== null && this.estrangeiro !== undefined) {
    output.writeFieldBegin('estrangeiro', Thrift.Type.BOOL, 11);
    output.writeBool(this.estrangeiro);
    output.writeFieldEnd();
  }
  if (this.etniaId !== null && this.etniaId !== undefined) {
    output.writeFieldBegin('etniaId', Thrift.Type.I64, 12);
    output.writeI64(this.etniaId);
    output.writeFieldEnd();
  }
  if (this.faleceu !== null && this.faleceu !== undefined) {
    output.writeFieldBegin('faleceu', Thrift.Type.BOOL, 13);
    output.writeBool(this.faleceu);
    output.writeFieldEnd();
  }
  if (this.municipioNascimentoCep !== null && this.municipioNascimentoCep !== undefined) {
    output.writeFieldBegin('municipioNascimentoCep', Thrift.Type.STRING, 14);
    output.writeString(this.municipioNascimentoCep);
    output.writeFieldEnd();
  }
  if (this.municipioNascimentoDne !== null && this.municipioNascimentoDne !== undefined) {
    output.writeFieldBegin('municipioNascimentoDne', Thrift.Type.STRING, 15);
    output.writeString(this.municipioNascimentoDne);
    output.writeFieldEnd();
  }
  if (this.municipioNascimentoIbge !== null && this.municipioNascimentoIbge !== undefined) {
    output.writeFieldBegin('municipioNascimentoIbge', Thrift.Type.STRING, 16);
    output.writeString(this.municipioNascimentoIbge);
    output.writeFieldEnd();
  }
  if (this.nisPisPasep !== null && this.nisPisPasep !== undefined) {
    output.writeFieldBegin('nisPisPasep', Thrift.Type.STRING, 17);
    output.writeString(this.nisPisPasep);
    output.writeFieldEnd();
  }
  if (this.nomeCompleto !== null && this.nomeCompleto !== undefined) {
    output.writeFieldBegin('nomeCompleto', Thrift.Type.STRING, 18);
    output.writeString(this.nomeCompleto);
    output.writeFieldEnd();
  }
  if (this.nomeSocial !== null && this.nomeSocial !== undefined) {
    output.writeFieldBegin('nomeSocial', Thrift.Type.STRING, 19);
    output.writeString(this.nomeSocial);
    output.writeFieldEnd();
  }
  if (this.numeroProntuario !== null && this.numeroProntuario !== undefined) {
    output.writeFieldBegin('numeroProntuario', Thrift.Type.STRING, 20);
    output.writeString(this.numeroProntuario);
    output.writeFieldEnd();
  }
  if (this.numeroProntuarioCnes !== null && this.numeroProntuarioCnes !== undefined) {
    output.writeFieldBegin('numeroProntuarioCnes', Thrift.Type.STRING, 22);
    output.writeString(this.numeroProntuarioCnes);
    output.writeFieldEnd();
  }
  if (this.racaCorId !== null && this.racaCorId !== undefined) {
    output.writeFieldBegin('racaCorId', Thrift.Type.I64, 23);
    output.writeI64(this.racaCorId);
    output.writeFieldEnd();
  }
  if (this.sexo !== null && this.sexo !== undefined) {
    output.writeFieldBegin('sexo', Thrift.Type.I32, 24);
    output.writeI32(this.sexo);
    output.writeFieldEnd();
  }
  if (this.telefoneCelular !== null && this.telefoneCelular !== undefined) {
    output.writeFieldBegin('telefoneCelular', Thrift.Type.STRING, 25);
    output.writeString(this.telefoneCelular);
    output.writeFieldEnd();
  }
  if (this.telefoneContato !== null && this.telefoneContato !== undefined) {
    output.writeFieldBegin('telefoneContato', Thrift.Type.STRING, 26);
    output.writeString(this.telefoneContato);
    output.writeFieldEnd();
  }
  if (this.telefoneResidencial !== null && this.telefoneResidencial !== undefined) {
    output.writeFieldBegin('telefoneResidencial', Thrift.Type.STRING, 27);
    output.writeString(this.telefoneResidencial);
    output.writeFieldEnd();
  }
  if (this.tipoSanguineo !== null && this.tipoSanguineo !== undefined) {
    output.writeFieldBegin('tipoSanguineo', Thrift.Type.I32, 28);
    output.writeI32(this.tipoSanguineo);
    output.writeFieldEnd();
  }
  if (this.cboNumero !== null && this.cboNumero !== undefined) {
    output.writeFieldBegin('cboNumero', Thrift.Type.STRING, 29);
    output.writeString(this.cboNumero);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

