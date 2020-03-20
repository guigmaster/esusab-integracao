//
// Autogenerated by Thrift Compiler (0.9.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;

var ttypes = module.exports = {};
VersaoThrift = module.exports.VersaoThrift = function(args) {
  this.major = null;
  this.minor = null;
  this.revision = null;
  if (args) {
    if (args.major !== undefined) {
      this.major = args.major;
    }
    if (args.minor !== undefined) {
      this.minor = args.minor;
    }
    if (args.revision !== undefined) {
      this.revision = args.revision;
    }
  }
};
VersaoThrift.prototype = {};
VersaoThrift.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I32) {
        this.major = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.minor = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.revision = input.readI32();
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

VersaoThrift.prototype.write = function(output) {
  output.writeStructBegin('VersaoThrift');
  if (this.major !== null && this.major !== undefined) {
    output.writeFieldBegin('major', Thrift.Type.I32, 1);
    output.writeI32(this.major);
    output.writeFieldEnd();
  }
  if (this.minor !== null && this.minor !== undefined) {
    output.writeFieldBegin('minor', Thrift.Type.I32, 2);
    output.writeI32(this.minor);
    output.writeFieldEnd();
  }
  if (this.revision !== null && this.revision !== undefined) {
    output.writeFieldBegin('revision', Thrift.Type.I32, 3);
    output.writeI32(this.revision);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

DadoInstalacaoThrift = module.exports.DadoInstalacaoThrift = function(args) {
  this.contraChave = null;
  this.uuidInstalacao = null;
  this.cpfOuCnpj = null;
  this.nomeOuRazaoSocial = null;
  this.fone = null;
  this.email = null;
  this.versaoSistema = null;
  this.nomeBancoDados = null;
  if (args) {
    if (args.contraChave !== undefined) {
      this.contraChave = args.contraChave;
    }
    if (args.uuidInstalacao !== undefined) {
      this.uuidInstalacao = args.uuidInstalacao;
    }
    if (args.cpfOuCnpj !== undefined) {
      this.cpfOuCnpj = args.cpfOuCnpj;
    }
    if (args.nomeOuRazaoSocial !== undefined) {
      this.nomeOuRazaoSocial = args.nomeOuRazaoSocial;
    }
    if (args.fone !== undefined) {
      this.fone = args.fone;
    }
    if (args.email !== undefined) {
      this.email = args.email;
    }
    if (args.versaoSistema !== undefined) {
      this.versaoSistema = args.versaoSistema;
    }
    if (args.nomeBancoDados !== undefined) {
      this.nomeBancoDados = args.nomeBancoDados;
    }
  }
};
DadoInstalacaoThrift.prototype = {};
DadoInstalacaoThrift.prototype.read = function(input) {
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
        this.contraChave = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.uuidInstalacao = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.cpfOuCnpj = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.nomeOuRazaoSocial = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.fone = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.email = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.versaoSistema = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRING) {
        this.nomeBancoDados = input.readString();
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

DadoInstalacaoThrift.prototype.write = function(output) {
  output.writeStructBegin('DadoInstalacaoThrift');
  if (this.contraChave !== null && this.contraChave !== undefined) {
    output.writeFieldBegin('contraChave', Thrift.Type.STRING, 1);
    output.writeString(this.contraChave);
    output.writeFieldEnd();
  }
  if (this.uuidInstalacao !== null && this.uuidInstalacao !== undefined) {
    output.writeFieldBegin('uuidInstalacao', Thrift.Type.STRING, 2);
    output.writeString(this.uuidInstalacao);
    output.writeFieldEnd();
  }
  if (this.cpfOuCnpj !== null && this.cpfOuCnpj !== undefined) {
    output.writeFieldBegin('cpfOuCnpj', Thrift.Type.STRING, 3);
    output.writeString(this.cpfOuCnpj);
    output.writeFieldEnd();
  }
  if (this.nomeOuRazaoSocial !== null && this.nomeOuRazaoSocial !== undefined) {
    output.writeFieldBegin('nomeOuRazaoSocial', Thrift.Type.STRING, 4);
    output.writeString(this.nomeOuRazaoSocial);
    output.writeFieldEnd();
  }
  if (this.fone !== null && this.fone !== undefined) {
    output.writeFieldBegin('fone', Thrift.Type.STRING, 5);
    output.writeString(this.fone);
    output.writeFieldEnd();
  }
  if (this.email !== null && this.email !== undefined) {
    output.writeFieldBegin('email', Thrift.Type.STRING, 6);
    output.writeString(this.email);
    output.writeFieldEnd();
  }
  if (this.versaoSistema !== null && this.versaoSistema !== undefined) {
    output.writeFieldBegin('versaoSistema', Thrift.Type.STRING, 7);
    output.writeString(this.versaoSistema);
    output.writeFieldEnd();
  }
  if (this.nomeBancoDados !== null && this.nomeBancoDados !== undefined) {
    output.writeFieldBegin('nomeBancoDados', Thrift.Type.STRING, 8);
    output.writeString(this.nomeBancoDados);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

DadoTransporteThrift = module.exports.DadoTransporteThrift = function(args) {
  this.uuidDadoSerializado = null;
  this.tipoDadoSerializado = null;
  this.cnesDadoSerializado = null;
  this.codIbge = null;
  this.ineDadoSerializado = null;
  this.numLote = null;
  this.dadoSerializado = null;
  this.remetente = null;
  this.originadora = null;
  this.versao = null;
  if (args) {
    if (args.uuidDadoSerializado !== undefined) {
      this.uuidDadoSerializado = args.uuidDadoSerializado;
    }
    if (args.tipoDadoSerializado !== undefined) {
      this.tipoDadoSerializado = args.tipoDadoSerializado;
    }
    if (args.cnesDadoSerializado !== undefined) {
      this.cnesDadoSerializado = args.cnesDadoSerializado;
    }
    if (args.codIbge !== undefined) {
      this.codIbge = args.codIbge;
    }
    if (args.ineDadoSerializado !== undefined) {
      this.ineDadoSerializado = args.ineDadoSerializado;
    }
    if (args.numLote !== undefined) {
      this.numLote = args.numLote;
    }
    if (args.dadoSerializado !== undefined) {
      this.dadoSerializado = args.dadoSerializado;
    }
    if (args.remetente !== undefined) {
      this.remetente = args.remetente;
    }
    if (args.originadora !== undefined) {
      this.originadora = args.originadora;
    }
    if (args.versao !== undefined) {
      this.versao = args.versao;
    }
  }
};
DadoTransporteThrift.prototype = {};
DadoTransporteThrift.prototype.read = function(input) {
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
        this.uuidDadoSerializado = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.tipoDadoSerializado = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.cnesDadoSerializado = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.codIbge = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.ineDadoSerializado = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I64) {
        this.numLote = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.dadoSerializado = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRUCT) {
        this.remetente = new ttypes.DadoInstalacaoThrift();
        this.remetente.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.STRUCT) {
        this.originadora = new ttypes.DadoInstalacaoThrift();
        this.originadora.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRUCT) {
        this.versao = new ttypes.VersaoThrift();
        this.versao.read(input);
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

DadoTransporteThrift.prototype.write = function(output) {
  output.writeStructBegin('DadoTransporteThrift');
  if (this.uuidDadoSerializado !== null && this.uuidDadoSerializado !== undefined) {
    output.writeFieldBegin('uuidDadoSerializado', Thrift.Type.STRING, 1);
    output.writeString(this.uuidDadoSerializado);
    output.writeFieldEnd();
  }
  if (this.tipoDadoSerializado !== null && this.tipoDadoSerializado !== undefined) {
    output.writeFieldBegin('tipoDadoSerializado', Thrift.Type.I64, 2);
    output.writeI64(this.tipoDadoSerializado);
    output.writeFieldEnd();
  }
  if (this.cnesDadoSerializado !== null && this.cnesDadoSerializado !== undefined) {
    output.writeFieldBegin('cnesDadoSerializado', Thrift.Type.STRING, 3);
    output.writeString(this.cnesDadoSerializado);
    output.writeFieldEnd();
  }
  if (this.codIbge !== null && this.codIbge !== undefined) {
    output.writeFieldBegin('codIbge', Thrift.Type.STRING, 4);
    output.writeString(this.codIbge);
    output.writeFieldEnd();
  }
  if (this.ineDadoSerializado !== null && this.ineDadoSerializado !== undefined) {
    output.writeFieldBegin('ineDadoSerializado', Thrift.Type.STRING, 5);
    output.writeString(this.ineDadoSerializado);
    output.writeFieldEnd();
  }
  if (this.numLote !== null && this.numLote !== undefined) {
    output.writeFieldBegin('numLote', Thrift.Type.I64, 6);
    output.writeI64(this.numLote);
    output.writeFieldEnd();
  }
  if (this.dadoSerializado !== null && this.dadoSerializado !== undefined) {
    output.writeFieldBegin('dadoSerializado', Thrift.Type.STRING, 7);
    output.writeString(this.dadoSerializado);
    output.writeFieldEnd();
  }
  if (this.remetente !== null && this.remetente !== undefined) {
    output.writeFieldBegin('remetente', Thrift.Type.STRUCT, 8);
    this.remetente.write(output);
    output.writeFieldEnd();
  }
  if (this.originadora !== null && this.originadora !== undefined) {
    output.writeFieldBegin('originadora', Thrift.Type.STRUCT, 9);
    this.originadora.write(output);
    output.writeFieldEnd();
  }
  if (this.versao !== null && this.versao !== undefined) {
    output.writeFieldBegin('versao', Thrift.Type.STRUCT, 10);
    this.versao.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

